import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CustomerState } from '../../../state/reducers/customer.reducer';
import * as CustomerSelectors from '../../../state/selectors/customer.selectors';
import { CustomerActions } from '../../../state/actions/customer.actions';
import { AuthActions } from 'src/app/modules/auth/state/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {

  public customer$: Observable<{ data: any, status: string }>;

  constructor(
    private store: Store<CustomerState>,
  ) {
    this.customer$ = this.store.pipe(select(CustomerSelectors.profile));
  }

  ngOnInit() {
    this.store.dispatch(AuthActions.getCurrentUser());
  }

  onLogoutHandler() {
    this.store.dispatch(AuthActions.logout());
  }

}
