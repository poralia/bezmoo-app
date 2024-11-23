import { createReducer, on } from '@ngrx/store';
import { CashierActions } from '../actions/cashier.actions';

export const cashierFeatureKey = 'cashier';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

