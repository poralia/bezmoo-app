import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CustomerActions = createActionGroup({
  source: 'Customer',
  events: {
    // ...
    // Sales
    // ...
    'Load Order': props<{ filters: {
      query: any[],
      fields: string[],
      order_by: string,
      limit_page_length: number,
    } }>(),
    'Load Order Success': props<{ data: any, filters: any }>(),
    'Load Order Failure': props<{ error: HttpErrorResponse, filters: any }>(),

    'Retrieve Order': props<{ name: string }>(),
    'Retrieve Order Success': props<{ data: any }>(),
    'Retrieve Order Failure': props<{ error: HttpErrorResponse }>(),

    'Create Queue': props<{ payload: { data: any } }>(),
    'Create Queue Success': props<{ data: any }>(),
    'Create Queue Failure': props<{ error: HttpErrorResponse }>(),

    'Load Queue': props<{ payload: {
      filters: any[],
      fields: string[],
      order_by?: string,
    } }>(),
    'Load Queue Success': props<{ data: any, filters: any }>(),
    'Load Queue Failure': props<{ error: HttpErrorResponse, filters: any }>(),

    'Delete Queue': props<{ payload: { name: string } }>(),
    'Delete Queue Success': props<{ data: any }>(),
    'Delete Queue Failure': props<{ error: HttpErrorResponse }>(),

    'Load Profile': props<{ payload: { filters: any[], fields: string[] } }>(),
    'Load Profile Success': props<{ data: any, filters: any }>(),
    'Load Profile Failure': props<{ error: unknown, filters: any }>(),

    'Load Company': props<{ payload: { filters: any[], fields: string[] } }>(),
    'Load Company Success': props<{ data: any, filters: any }>(),
    'Load Company Failure': props<{ error: unknown, filters: any }>(),
  }
});
