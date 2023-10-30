import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhaTableComponent } from './components/mha-table/mha-table.component';
import { MatTableModule } from '@angular/material/table';
import { UpperDirective } from './directives/upper.directive';
import { MhaManageHeroComponent } from './components/mha-manage-hero/mha-manage-hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeroService } from './services';

@NgModule({
  declarations: [MhaTableComponent, UpperDirective, MhaManageHeroComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [MhaTableComponent, UpperDirective, MhaManageHeroComponent],
})
export class SharedModule {}
