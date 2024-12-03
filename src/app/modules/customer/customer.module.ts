import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerScannerComponent } from './components/customer-scanner/customer-scanner.component';
import { CustomerQueueFormComponent } from './components/customer-queue-form/customer-queue-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerTakeOrderScreenComponent } from './screens/customer-take-order-screen/customer-take-order-screen.component';


@NgModule({
  declarations: [
    CustomerScannerComponent,
    CustomerQueueFormComponent,
    CustomerTakeOrderScreenComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModule { }
