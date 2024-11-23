import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../actions/customer.actions';
import { Statuses } from 'src/app/modules/shared/enum';
import { HttpErrorResponse } from '@angular/common/http';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  sales: {
    order: {
      list: {
        data: any,
        status: string,
        error: HttpErrorResponse | null,
      },
      retrieve: {
        data: any,
        status: string,
        error: HttpErrorResponse | null,
      },
    },
  },
}

export const initialState: CustomerState = {
  sales: {
    order: {
      list: {
        data: null,
        status: Statuses.Idle,
        error: null,
      },
      retrieve: {
        data: null,
        status: Statuses.Idle,
        error: null,
      }
    },
  },
};

export const CustomerReducer = createReducer(
  initialState,

  // ...
  // List of orders
  // ...
  on(CustomerActions.loadOrder, (state, action) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          list: {
            ...state.sales.order.list,
            status: Statuses.Loading,
            error: null,
          },
        },
      },
    };
  }),
  on(CustomerActions.loadOrderSuccess, (state, action) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          list: {
            ...state.sales.order.list,
            data: action.data,
            status: Statuses.Success,
            error: null,
          },
        },
      },
    };
  }),
  on(CustomerActions.loadOrderFailure, (state, action) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          list: {
            ...state.sales.order.list,
            status: Statuses.Failure,
            error: action.error,
          },
        },
      },
    };
  }),
);

