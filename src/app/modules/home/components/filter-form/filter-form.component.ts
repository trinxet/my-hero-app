import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'mha-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  @Output()
  submitEmitter: EventEmitter<string> = new EventEmitter<string>();

  public heroNameInput = new FormControl();

  ngOnInit(): void {
    this.heroNameInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data: string) => {
        this.submitEmitter.next(data);
      });
  }

  public clearSelection() {
    this.heroNameInput.setValue('');
  }
}
