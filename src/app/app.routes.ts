import { Routes } from '@angular/router';
import { AbesseDashboardComponent } from './page/abesse-dashboard/abesse-dashboard.component';
import { AbesseProductsComponent } from './page/abesse-products/abesse-products.component';

export const routes: Routes = [
  {
    path: '',
    component: AbesseDashboardComponent,
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./page/abesse-orders/abesse-orders.component').then(
        (m) => m.AbesseOrdersComponent
      ),
  },
  {
    path: 'products',
    component: AbesseProductsComponent,
  },
  {
    path: 'cinema-editor/:id',
    loadComponent: () =>
      import('./page/cinema-editor/cinema-editor.component').then(
        (m) => m.CinemaEditorComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
