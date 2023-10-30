import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhaManageHeroComponent } from './mha-manage-hero.component';

describe('MhaManageHeroComponent', () => {
  let component: MhaManageHeroComponent;
  let fixture: ComponentFixture<MhaManageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MhaManageHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MhaManageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
