import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreateHeroComponent } from './main-create-hero.component';

describe('MainCreateHeroComponent', () => {
  let component: MainCreateHeroComponent;
  let fixture: ComponentFixture<MainCreateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCreateHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
