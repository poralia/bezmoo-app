import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../actions/customer.actions';
import { Statuses } from 'src/app/modules/shared/enum';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthActions } from 'src/app/modules/auth/state/actions/auth.actions';

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
    queue: {
      data: any;
      status: string;
      error: unknown;
    },
  },
  profile: {
    data: any;
    status: string;
    error: unknown;
  },
  company: {
    data: any;
    status: string;
    error: unknown;
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
    queue: {
      data: null,
      status: Statuses.Idle,
      error: null,
    },
  },
  profile: {
    data: null,
    status: Statuses.Idle,
    error: null,
  },
  company: {
    data: null,
    status: Statuses.Idle,
    error: null,
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


  // ...
  // Retrieve sales order
  // ...
  on(CustomerActions.retrieveOrder, (state) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          retrieve: {
            ...state.sales.order.retrieve,
            status: Statuses.Loading,
            error: null,
          }
        }
      },
    };
  }),
  on(CustomerActions.retrieveOrderSuccess, (state, { data }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          retrieve: {
            ...state.sales.order.retrieve,
            status: Statuses.Success,
            data: data,
            error: null,
          }
        }
      },
    }
  }),
  on(CustomerActions.retrieveOrderFailure, (state, { error }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        order: {
          ...state.sales.order,
          retrieve: {
            ...state.sales.order.retrieve,
            status: Statuses.Failure,
            error: error,
          }
        }
      },
    }
  }),


  // ...
  // Load Queue
  // ...
  on(CustomerActions.loadQueue, (state) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: {
          ...state.sales.queue,
          status: Statuses.Idle,
          error: null,
        }
      },
    };
  }),
  on(CustomerActions.loadQueueSuccess, (state, { data }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: {
          ...state.sales.queue,
          data: data,
          status: Statuses.Success,
          error: null,
        }
      },
    }
  }),
  on(CustomerActions.loadQueueFailure, (state, { error }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: {
          ...state.sales.queue,
          status: Statuses.Idle,
          error: error,
        }
      },
    }
  }),


  // ...
  // Delete Queue
  // ...
  on(CustomerActions.deleteQueue, (state) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: {
          ...state.sales.queue,
          status: Statuses.Idle,
          error: null,
        }
      },
    };
  }),
  on(CustomerActions.deleteQueueSuccess, (state, { data }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: initialState.sales.queue,
      },
    }
  }),
  on(CustomerActions.deleteQueueFailure, (state, { error }) => {
    return {
      ...state,
      sales: {
        ...state.sales,
        queue: {
          ...state.sales.queue,
          status: Statuses.Idle,
          error: error,
        }
      },
    }
  }),


  // ...
  // Load Profile
  // ...
  on(CustomerActions.loadProfile, (state) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        status: Statuses.Loading,
        error: null,
      }
    };
  }),
  on(CustomerActions.loadProfileSuccess, (state, { data }) => {
    return {
      ...state,
      profile: {
        data: data,
        status: Statuses.Success,
        error: null,
      }
    }
  }),
  on(CustomerActions.loadProfileFailure, (state, { error }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        status: Statuses.Idle,
        error: error,
      }
    }
  }),


  // ...
  // Get current user
  // ...
  on(AuthActions.getCurrentUserSuccess, (state, { data }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        status: Statuses.Success,
        error: null,
        data: data,
      }
    }
  }),


  // ...
  // Load Company
  // ...
  on(CustomerActions.loadCompany, (state) => {
    return {
      ...state,
      company: {
        ...state.company,
        status: Statuses.Loading,
        error: null,
      }
    };
  }),
  on(CustomerActions.loadCompanySuccess, (state, { data }) => {
    return {
      ...state,
      company: {
        data: data,
        status: Statuses.Success,
        error: null,
      }
    }
  }),
  on(CustomerActions.loadCompanyFailure, (state, { error }) => {
    return {
      ...state,
      company: {
        ...state.company,
        status: Statuses.Failure,
        error: error,
      }
    }
  }),
);

