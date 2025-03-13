import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mapas' },
  {
    path: 'mapas',
    loadChildren: () =>
      import('./pages/map/map.routes').then((m) => m.MAP_ROUTES),
  },
];
