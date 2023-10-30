import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCreateHeroComponent } from './containers/main-create-hero/main-create-hero.component';
import { RouterModule } from '@angular/router';
import { createHeroRoutes } from './create-hero.routes';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [MainCreateHeroComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(createHeroRoutes),
  ],
})
export class CreateHeroModule {}
