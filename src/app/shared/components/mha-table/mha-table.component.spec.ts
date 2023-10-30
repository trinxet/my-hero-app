import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhaTableComponent } from './mha-table.component';
import { MatTableModule } from '@angular/material/table';

describe('MhaTableComponent', () => {
  let component: MhaTableComponent;
  let fixture: ComponentFixture<MhaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MhaTableComponent],
      imports: [MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MhaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
