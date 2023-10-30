import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHero } from '../../interfaces';

@Component({
  selector: 'mha-table',
  templateUrl: './mha-table.component.html',
  styleUrls: ['./mha-table.component.scss'],
})
export class MhaTableComponent {
  @Input() dataSource: IHero[] = [];
  @Output()
  editEmitter: EventEmitter<IHero> = new EventEmitter<IHero>();
  @Output()
  deleteEmitter: EventEmitter<IHero> = new EventEmitter<IHero>();
  public displayedColumns = ['position', 'name', 'company', 'options'];

  public editElement(element: IHero) {
    this.editEmitter.next(element);
  }

  public deleteElement(element: IHero) {
    this.deleteEmitter.next(element);
  }
}
