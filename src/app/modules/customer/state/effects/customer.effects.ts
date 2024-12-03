import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../../services/customer/customer.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerState } from '../reducers/customer.reducer';
import { CustomerActions } from '../../state/actions/customer.actions';
import { AuthActions } from 'src/app/modules/auth/state/actions/auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class CustomerEffects {

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private router: Router,
    private store: Store<CustomerState>,
  ) {}

  // ...
  // Get sales order
  // ...
  getOrder$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadOrder),
      mergeMap(({ filters }) => {
        return this.customerService.getOrder(filters).pipe(
          map((response) => CustomerActions.loadOrderSuccess({ data: response, filters: filters })),
          catchError((error) => of(CustomerActions.loadOrderFailure({ error, filters: filters })))
        );
      })
    )
  );

  getOrderSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadOrderSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  getOrderFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadOrderFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  // ...
  // Retrieve sales order
  // ...
  retrieveOrder$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.retrieveOrder),
      mergeMap(({ name }) => {
        return this.customerService.retrieveOrder(name).pipe(
          map((response) => CustomerActions.retrieveOrderSuccess({ data: response })),
          catchError((error) => of(CustomerActions.retrieveOrderFailure({ error })))
        );
      })
    )
  );

  retrieveOrderSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.retrieveOrderSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  retrieveOrderFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.retrieveOrderFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  // ...
  // Get POS Profile
  // ...
  getProfile$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadProfile),
      mergeMap(({ payload }) => {
        return this.customerService.getProfile(payload).pipe(
          map((response) => CustomerActions.loadProfileSuccess({ data: response, filters: payload.filters })),
          catchError((error) => of(CustomerActions.loadProfileFailure({ error, filters: payload.filters })))
        );
      })
    )
  );

  getProfileSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadProfileSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  getProfileFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadProfileFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );


  // ...
  // Create Queue
  // ...
  createQueue$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.createQueue),
      mergeMap(({ payload }) => {
        return this.customerService.createQueue(payload.data).pipe(
          map((response) => CustomerActions.createQueueSuccess({ data: response })),
          catchError((error) => of(CustomerActions.createQueueFailure({ error })))
        );
      })
    )
  );

  createQueueSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.createQueueSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
        this.router.navigate(['/customer/tabs/home'], { replaceUrl: true });
        // refresh the user
        this.store.dispatch(AuthActions.getCurrentUser());

      })
    ), { dispatch: false }
  );

  createQueueFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.createQueueFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );


  // ...
  // Load Queue
  // ...
  loadQueue$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadQueue),
      mergeMap(({ payload }) => {
        return this.customerService.getQueue(payload).pipe(
          map((response) => CustomerActions.loadQueueSuccess({ data: response, filters: payload.filters })),
          catchError((error) => of(CustomerActions.loadQueueFailure({ error, filters: payload.filters })))
        );
      })
    )
  );

  loadQueueSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadQueueSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  loadQueueFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadQueueFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );


  // ...
  // Delete Queue
  // ...
  deleteQueue$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.deleteQueue),
      mergeMap(({ payload }) => {
        return this.customerService.deleteQueue(payload.name).pipe(
          map((response) => CustomerActions.deleteQueueSuccess({ data: response })),
          catchError((error) => of(CustomerActions.deleteQueueFailure({ error })))
        );
      })
    )
  );

  deleteQueueSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.deleteQueueSuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  deleteQueueFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.deleteQueueFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );


   // ...
  // Load Company
  // ...
  loadCompany$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadCompany),
      mergeMap(({ payload }) => {
        return this.customerService.getCompany(payload).pipe(
          map((response) => CustomerActions.loadCompanySuccess({ data: response, filters: payload.filters })),
          catchError((error) => of(CustomerActions.loadCompanyFailure({ error, filters: payload.filters })))
        );
      })
    )
  );

  loadCompanySuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadCompanySuccess),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

  loadCompanyFailure$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadCompanyFailure),
      map((response: any) => {
        // Do something
        console.log(response);
      })
    ), { dispatch: false }
  );

}
