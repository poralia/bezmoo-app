import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { CustomerState } from '../../state/reducers/customer.reducer';
import { CustomerActions } from '../../state/actions/customer.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/modules/auth/services/http/auth.service';

@Component({
  selector: 'app-customer-queue-form',
  templateUrl: './customer-queue-form.component.html',
  styleUrls: ['./customer-queue-form.component.scss'],
})
export class CustomerQueueFormComponent  implements OnInit {

  @Input('company') company: string = '';

  public formGroup: FormGroup = new FormGroup({});
  public creating: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<CustomerState>,
    private actionsSubject$: ActionsSubject,
  ) { 
    this.actionsSubject$.pipe(takeUntilDestroyed()).subscribe((state: any) => {
      switch (state.type) {
        case '[Customer] Create Queue':
          this.creating = true;
          break;
        case '[Customer] Create Queue Success':
        case '[Customer] Create Queue Fail':
          this.creating = false;
          break;
        default:
          // not implemented yet
      }
    });
  }

  ngOnInit() {
    const user = this.authService.getUser() as any;

    this.formGroup = this.fb.group({
      license_plate: ['', [Validators.required]],
      company: [this.company, [Validators.required]],
      customer: [user?.customer?.name, [Validators.required]],
    });
  }

  onSubmitHandler(): void {
    this.store.dispatch(CustomerActions.createQueue({
      payload: {
        data: {
          ...this.formGroup.value,
          license_plate: this.formGroup.value.license_plate.toUpperCase(),
        },
      }
    }));
  }

}
