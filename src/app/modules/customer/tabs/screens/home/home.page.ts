import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/modules/auth/state/reducers/auth.reducer';
import { environment } from 'src/environments/environment';
import * as AuthSelectors from 'src/app/modules/auth/state/selectors/auth.selectors';
import * as CustomerSelectors from '../../../state/selectors/customer.selectors';
import { AuthActions } from 'src/app/modules/auth/state/actions/auth.actions';
import { CustomerScannerComponent } from '../../../components/customer-scanner/customer-scanner.component';
import { CustomerActions } from '../../../state/actions/customer.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public user$: Observable<{ data: any, status: string }>;
  public listOrder$: Observable<{ data: any, status: string }>;
  public queue$: Observable<{ data: any, status: string }>;
  public host: string = environment.host;

  constructor(
    private store: Store<AuthState>,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private actionsSubject$: ActionsSubject,
  ) { 
    this.user$ = this.store.pipe(select(AuthSelectors.user));
    this.listOrder$ = this.store.pipe(select(CustomerSelectors.listOrder));
    this.queue$ = this.store.pipe(select(CustomerSelectors.Queue));

    // listen state
    this.actionsSubject$.pipe(takeUntilDestroyed()).subscribe((state: any) => {
      switch (state.type) {
        case '[Auth] Get Current User Success':
          const customer = state.data?.customer;

          if (customer) {
            // Load list order related to customer
            this.store.dispatch(CustomerActions.loadOrder({ filters: {
              query: [["customer", "=", customer.name]],
              fields: ["*"],
              order_by: "creation desc",
              limit_page_length: 1,
            }}));

            // Load queue related to customer
            this.store.dispatch(CustomerActions.loadQueue({ 
              payload: {
                filters: [
                  ["customer", "=", customer.name], 
                  ["status", "=", "Waiting"],
                ],
                fields: ["*"],
                order_by: "creation desc",
              }
            }));
          }
          break;
        default:
          // not implemented yet
      }
    });
  }

  /**
   * Open the scanner
   */
  async openScannerHandler() {
    const modal = await this.modalCtrl.create({
      component: CustomerScannerComponent,
      backdropDismiss: false,
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

  /**
   * Present delete queue alert
   */
  async presentDeleteQueueAlert(name: string) {
    const alert = await this.alertCtrl.create({
      header: 'Batal Antrian',
      message: 'Anda yakin ingin membatalkan antrian ini?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ya, Batalkan',
          handler: () => {
            this.store.dispatch(CustomerActions.deleteQueue({ payload: { name } }));
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.store.dispatch(AuthActions.getCurrentUser());
  }

  /**
   * Delete queue
   */
  onCancelQueueHandler(name: string): void {
    this.presentDeleteQueueAlert(name);
  }

  /**
   * Refresh queue
   */
  onQueueRefreshHandler(): void {
    this.store.dispatch(AuthActions.getCurrentUser());
  }

}
