import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPage } from './history.page';
import { OrderDetailScreenComponent } from './childs/order-detail-screen/order-detail-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HistoryPage,
      },
      {
        path: ':id',
        component: OrderDetailScreenComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryPageRoutingModule {}
