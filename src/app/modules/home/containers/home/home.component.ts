import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from 'src/app/shared';
import { startWith, Subject, takeUntil, tap } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'mha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public heroesList: any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private heroService: HeroService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public filterHeroById(id: number) {
    console.log(this.heroService.filterById(id));
    this.heroesList = this.heroService.filterById(id);
  }

  public clearSelection() {
    this.getHeroes();
  }

  private getHeroes() {
    this.loadingService.show(); //si fuese una llamada http real no haría falta ya que esta implementado el interceptor;
    this.heroService
      .getMyHeroes()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: any) => {
          this.loadingService.hide();
          if (result && result.heroes) {
            this.heroesList = result.heroes;
          }
        },
      });
  }
}
