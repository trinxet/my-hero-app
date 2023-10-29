import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { homeRoutes } from './containers/home.routes';
import { RouterModule } from '@angular/router';
import { SharedModule, HeroService } from '../../shared';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent, FilterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    SharedModule,

    RouterModule.forChild(homeRoutes),
  ],
  providers: [HeroService],
})
export class HomeModule {}
