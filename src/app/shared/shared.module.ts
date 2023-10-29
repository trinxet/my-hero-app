import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhaTableComponent } from './components/mha-table/mha-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MhaTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [MhaTableComponent],
})
export class SharedModule {}
