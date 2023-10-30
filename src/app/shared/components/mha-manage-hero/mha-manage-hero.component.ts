import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IHero } from '../../interfaces';

@Component({
  selector: 'mha-manage-hero',
  templateUrl: './mha-manage-hero.component.html',
  styleUrls: ['./mha-manage-hero.component.scss'],
})
export class MhaManageHeroComponent implements OnInit {
  @Output()
  submitEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set heroMod(_hero: IHero) {
    this.heroForm = new FormGroup({
      name: new FormControl(
        _hero?.name,
        Validators.compose([Validators.minLength(2), Validators.required])
      ),
      company: new FormControl(_hero?.company, Validators.required),
    });
  }

  public heroForm: FormGroup;
  public selectValues = [{ name: 'Marvel' }, { name: 'DC' }];

  ngOnInit(): void {}

  public onSubmit() {
    if (this.heroForm.valid) {
      this.submitEmitter.next(this.heroForm.value);
    }
  }
}
