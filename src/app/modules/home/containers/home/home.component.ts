import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from 'src/app/shared';
import { startWith, Subject, takeUntil, tap } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'mha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public heroesList: any;
  public totalLength = 0;
  public pageSize = 2;
  private isFilter = false;
  private filterName: string = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private heroService: HeroService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getHeroes(0, this.pageSize);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public filterHeroByName(name: string) {
    if (!name) {
      this.clearSelection();
      return;
    }
    this.isFilter = true;
    this.filterName = name;
    this.heroesList = this.heroService.filterHeroByName(name, 0, this.pageSize);
  }

  public clearSelection() {
    this.isFilter = false;
    this.filterName = '';
    this.getHeroes(0, this.pageSize);
  }

  public handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    if (this.isFilter) {
      this.heroesList = this.heroService.filterHeroByName(
        this.filterName,
        e.pageIndex,
        this.pageSize
      );
      return;
    }
    this.getHeroes(e.pageIndex, this.pageSize);
  }

  public gotoAdd() {}

  private getHeroes(pageNumber: number, itemsPerPage: number) {
    this.loadingService.show(); //si fuese una llamada http real no haría falta ya que esta implementado el interceptor;
    this.heroService
      .getMyHeroes(pageNumber, itemsPerPage)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: any) => {
          this.loadingService.hide();
          if (result && result.heroes) {
            this.heroesList = result;
          }
        },
      });
  }
}
