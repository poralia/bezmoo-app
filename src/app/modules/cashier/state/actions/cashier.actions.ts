import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CashierActions = createActionGroup({
  source: 'Cashier',
  events: {
    'Load Cashiers': emptyProps(),
    'Load Cashiers Success': props<{ data: unknown }>(),
    'Load Cashiers Failure': props<{ error: unknown }>(),
  }
});
