import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreateHeroComponent } from './main-create-hero.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainCreateHeroComponent', () => {
  let component: MainCreateHeroComponent;
  let fixture: ComponentFixture<MainCreateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCreateHeroComponent],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
