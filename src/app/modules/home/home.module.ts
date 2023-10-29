import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { homeRoutes } from './containers/home/home.routes';
import { RouterModule } from '@angular/router';
import { SharedModule, HeroService } from '../../shared';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(homeRoutes)],
  providers: [HeroService],
})
export class HomeModule {}
