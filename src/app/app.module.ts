import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './modules/auth/state/reducers/auth.reducer';
import { AuthEffects } from './modules/auth/state/effects/auth.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthorizationInterceptor } from './modules/auth/services/http/authorization.interceptor';
import { NgHttpLoaderComponent, pendingRequestsInterceptor$ } from 'ng-http-loader';
import { HttpErrorInterceptor } from './modules/shared/services/http/http-error.interceptor';
import { CustomerReducer } from './modules/customer/state/reducers/customer.reducer';
import { CustomerEffects } from './modules/customer/state/effects/customer.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    NgHttpLoaderComponent,
    IonicModule.forRoot({
      mode: 'md',
    }), 
    AppRoutingModule, 
    StoreModule.forRoot({
      auth: AuthReducer,
      customer: CustomerReducer,
    }, {}), 
    EffectsModule.forRoot([
      AuthEffects,
      CustomerEffects,
    ]),
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        HttpErrorInterceptor,
        AuthorizationInterceptor,
        pendingRequestsInterceptor$,
      ]),
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
