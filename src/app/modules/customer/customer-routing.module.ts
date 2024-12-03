import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTakeOrderScreenComponent } from './screens/customer-take-order-screen/customer-take-order-screen.component';

const routes: Routes = [
  {
    path: 'customer',
    children: [
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
      },
      {
        path: 'scanner',
        component: CustomerTakeOrderScreenComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
