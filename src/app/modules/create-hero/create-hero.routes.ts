import { Routes } from '@angular/router';
import { MainCreateHeroComponent } from './containers';

export const createHeroRoutes: Routes = [
  {
    path: '',
    component: MainCreateHeroComponent,
  },
  {
    path: ':id',
    component: MainCreateHeroComponent,
  },
];
