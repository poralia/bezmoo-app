import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryPage } from './history.page';

import { HistoryPageRoutingModule } from './history-routing.module';
import { OrderDetailScreenComponent } from './childs/order-detail-screen/order-detail-screen.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HistoryPageRoutingModule,
  ],
  declarations: [
    HistoryPage,
    OrderDetailScreenComponent,
  ],
})
export class HistoryPageModule {}
