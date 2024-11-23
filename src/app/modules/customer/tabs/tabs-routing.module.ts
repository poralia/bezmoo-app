import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./screens/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'outlet',
        loadChildren: () => import('./screens/outlet/outlet.module').then(m => m.OutletPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./screens/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./screens/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/customer/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
