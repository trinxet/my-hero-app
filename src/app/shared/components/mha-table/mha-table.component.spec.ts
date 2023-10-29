import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhaTableComponent } from './mha-table.component';

describe('MhaTableComponent', () => {
  let component: MhaTableComponent;
  let fixture: ComponentFixture<MhaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MhaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
