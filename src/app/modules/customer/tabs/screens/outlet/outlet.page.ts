import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerState } from '../../../state/reducers/customer.reducer';
import { CustomerActions } from '../../../state/actions/customer.actions';
import * as CustomerSelectors from '../../../state/selectors/customer.selectors';

@Component({
  selector: 'app-outlet',
  templateUrl: 'outlet.page.html',
  styleUrls: ['outlet.page.scss']
})
export class OutletPage {

  public company$: Observable<{ data: any, status: string }>;

  constructor(
    private store: Store<CustomerState>,
  ) { 
    this.company$ = this.store.pipe(select(CustomerSelectors.company));
  }

  ngOnInit() {
    this.store.dispatch(CustomerActions.loadCompany({ payload: {
      filters: [],
      fields: ["company_name", "company_description"],
    }}));
  }

}
