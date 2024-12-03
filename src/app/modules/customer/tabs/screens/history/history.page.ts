import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerState } from '../../../state/reducers/customer.reducer';
import { AuthService } from 'src/app/modules/auth/services/http/auth.service';
import { CustomerActions } from '../../../state/actions/customer.actions';
import * as CustomerSelectors from '../../../state/selectors/customer.selectors';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class HistoryPage {

  public salesOrder$: Observable<{ data: any, status: string }>;
  
  constructor(
    private store: Store<CustomerState>,
    private authService: AuthService,
  ) { 
    this.salesOrder$ = this.store.select(CustomerSelectors.listOrder);
  }

  ngOnInit() {
    const user: any = this.authService.getUser();
    if (user && user.customer) {
      this.store.dispatch(CustomerActions.loadOrder({ filters: {
        query: [["customer", "=", user.customer.name]],
        fields: ["*"],
        order_by: "creation desc",
        limit_page_length: 10,
      } }));
    }
  }

}
