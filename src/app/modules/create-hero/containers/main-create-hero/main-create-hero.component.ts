import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { APP_ROUTERS, HeroService, IHero, IHeroResponse } from 'src/app/shared';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'mha-main-create-hero',
  templateUrl: './main-create-hero.component.html',
  styleUrls: ['./main-create-hero.component.scss'],
})
export class MainCreateHeroComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public myHero: IHero;
  private idMod: string | null;

  constructor(
    private heroService: HeroService,
    private loadingService: LoadingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idMod = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idMod) {
      this.getUserById();
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public manageSubmit(hero: IHero) {
    this.loadingService.show(); //si fuese una llamada http real no haría falta ya que esta implementado el interceptor;
    if (this.idMod) {
      this.updateHero(hero);
      return;
    }
    this.addHero(hero);
  }

  private manageResponse(result: IHeroResponse) {
    this.loadingService.hide();
    if (result && result.hero) {
      this.router.navigate(['/' + APP_ROUTERS.HOME.path]);
    }
  }

  private updateHero(hero: IHero) {
    hero.id = parseInt(this.idMod as string);
    this.heroService
      .update(hero)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: IHeroResponse) => {
          this.manageResponse(result);
        },
      });
  }

  private addHero(hero: IHero) {
    this.heroService
      .addHero(hero)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: IHeroResponse) => {
          this.manageResponse(result);
        },
      });
  }

  private getUserById() {
    this.loadingService.show(); //si fuese una llamada http real no haría falta ya que esta implementado el interceptor;
    this.heroService
      .filterById(parseInt(this.idMod as string))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: IHeroResponse) => {
          this.loadingService.hide();
          if (result && result.hero) {
            this.myHero = result.hero;
          }
        },
      });
  }
}
