import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { homeRoutes } from './containers/home.routes';
import { RouterModule } from '@angular/router';
import { SharedModule, HeroService } from '../../shared';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, FilterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,

    RouterModule.forChild(homeRoutes),
  ],
  providers: [HeroService],
})
export class HomeModule {}
