import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mha-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {
  @Output()
  clearEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  submitEmitter: EventEmitter<number> = new EventEmitter<number>();

  public filterForm: FormGroup = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  public clearSelection() {
    this.clearEmitter.next('test');
  }

  public onSubmit() {
    this.submitEmitter.next(this.filterForm.value.id);
  }
}
