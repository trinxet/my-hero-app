import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTERS } from './shared';

const routes: Routes = [
  {
    path: APP_ROUTERS.HOME.path,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: APP_ROUTERS.CREATE_HERO.path,
    loadChildren: () =>
      import('./modules/create-hero/create-hero.module').then(
        (m) => m.CreateHeroModule
      ),
  },
  {
    path: APP_ROUTERS.UPDATE_HERO.path,
    loadChildren: () =>
      import('./modules/create-hero/create-hero.module').then(
        (m) => m.CreateHeroModule
      ),
  },
  {
    path: '',
    redirectTo: APP_ROUTERS.HOME.path,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: APP_ROUTERS.HOME.path,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
