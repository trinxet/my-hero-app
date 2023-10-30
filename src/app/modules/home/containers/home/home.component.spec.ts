import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  APP_ROUTERS,
  HeroService,
  IHero,
  IHeroListResponse,
} from 'src/app/shared';
import { of } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const heroMock: IHero = { id: 0, name: 'test', company: 'test' };
const defaultRespons: IHeroListResponse = {
  heroes: [heroMock],
  size: 2,
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let heroService: HeroService;
  let router: Router;
  let loadingService: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatDialogModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    heroService = TestBed.inject(HeroService);
    loadingService = TestBed.inject(LoadingService);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Heroes on filterHeroByName when name not defined', fakeAsync(() => {
    const spy = spyOn(heroService, 'getMyHeroes').and.returnValue(
      of(defaultRespons)
    );
    const spyLoading = spyOn(loadingService, 'hide');
    component.filterHeroByName('');
    flush();
    expect(spy).toHaveBeenCalledWith(0, 2);
    expect(spyLoading).toHaveBeenCalled();
  }));

  it('should get Heroes on filterHeroByName when name is defined', () => {
    const testName = 'test';
    const spy = spyOn(heroService, 'filterHeroByName').and.returnValue(
      defaultRespons
    );
    component.filterHeroByName('test');
    expect(spy).toHaveBeenCalledWith(testName, 0, component.pageSize);
  });

  it('Shoud navigate to edit', () => {
    const spy = spyOn(router, 'navigate');
    component.goToEdit(heroMock);
    expect(spy).toHaveBeenCalledWith([
      '/' + APP_ROUTERS.UPDATE_HERO.path + '/' + heroMock.id,
    ]);
  });
});
