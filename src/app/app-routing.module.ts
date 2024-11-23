import { HttpClient } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Customer module
  {
    matcher: (url) => {
      const role = localStorage.getItem('bezmoo_user_roles');
      if (role?.includes('Customer')) {
        return url.length ? { consumed: [] } : { consumed: url };
      }

      return null;
    },
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule),
  },

  // Cashier module
  {
    matcher: (url) => {
      const role = localStorage.getItem('bezmoo_user_roles');
      if (role?.includes('Cashier')) {
        return url.length ? { consumed: [] } : { consumed: url };
      }

      return null;
    },
    loadChildren: () => import('./modules/cashier/cashier.module').then(m => m.CashierModule),
  },

  // Auth module
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
