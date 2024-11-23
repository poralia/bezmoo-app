import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OutletPage } from './outlet.page';

import { OutletPageRoutingModule } from './outlet-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OutletPageRoutingModule
  ],
  declarations: [OutletPage]
})
export class OutletPageModule {}
