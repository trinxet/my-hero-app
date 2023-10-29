import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'mha-table',
  templateUrl: './mha-table.component.html',
  styleUrls: ['./mha-table.component.scss'],
})
export class MhaTableComponent {
  @Input() dataSource: PeriodicElement[] = [];
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];

  public showImage(url: string) {
    console.log(url);
  }
}
