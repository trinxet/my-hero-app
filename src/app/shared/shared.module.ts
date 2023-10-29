import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhaTableComponent } from './components/mha-table/mha-table.component';
import { MatTableModule } from '@angular/material/table';
import { UpperDirective } from './directives/upper.directive';

@NgModule({
  declarations: [MhaTableComponent, UpperDirective],
  imports: [CommonModule, MatTableModule],
  exports: [MhaTableComponent, UpperDirective],
})
export class SharedModule {}
