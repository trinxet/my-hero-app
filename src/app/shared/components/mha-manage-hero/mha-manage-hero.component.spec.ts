import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhaManageHeroComponent } from './mha-manage-hero.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

describe('MhaManageHeroComponent', () => {
  let component: MhaManageHeroComponent;
  let fixture: ComponentFixture<MhaManageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MhaManageHeroComponent],
      imports: [MatFormFieldModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MhaManageHeroComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
