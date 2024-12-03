import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerState } from 'src/app/modules/customer/state/reducers/customer.reducer';
import { CustomerActions } from '../../../../../state/actions/customer.actions';
import * as CustomerSelectors from '../../../../../state/selectors/customer.selectors';

@Component({
  selector: 'app-order-detail-screen',
  templateUrl: './order-detail-screen.component.html',
  styleUrls: ['./order-detail-screen.component.scss'],
})
export class OrderDetailScreenComponent  implements OnInit {

  public name: string = this.route.snapshot.paramMap.get('id') as string;
  public retrieveOrder$: Observable<{ data: any, status: string }>;

  constructor(
    private store: Store<CustomerState>,
    private route: ActivatedRoute,
  ) { 
    this.retrieveOrder$ = this.store.pipe(select(CustomerSelectors.retrieveOrder));
  }

  ngOnInit() {
    this.store.dispatch(CustomerActions.retrieveOrder({ name: this.name }));
  }

}
