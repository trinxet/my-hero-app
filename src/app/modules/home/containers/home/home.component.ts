import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from 'src/app/shared';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public heroesList: any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getHeroes() {
    this.heroService
      .getMyHeroes()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: any) => {
          if (result && result.heroes) {
            this.heroesList = result.heroes;
          }
        },
      });
  }
}
