import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  APP_ROUTERS,
  HeroService,
  IHero,
  IHeroListResponse,
} from 'src/app/shared';
import { Subject, takeUntil } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('userDialogTemplate')
  userDialogTemplate: TemplateRef<any>;
  public heroesList: IHeroListResponse;
  public totalLength = 0;
  public pageSize = 2;
  private isFilter = false;
  private filterName: string = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private heroService: HeroService,
    private loadingService: LoadingService,
    private router: Router,
    private dialog: MatDialog
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

  public getCreateRoute(): string {
    return '/' + APP_ROUTERS.CREATE_HERO.path;
  }

  public goToEdit(hero: IHero) {
    this.router.navigate(['/' + APP_ROUTERS.UPDATE_HERO.path + '/' + hero.id]);
  }

  public deleteHero(hero: IHero) {
    const dialogRef = this.dialog.open(this.userDialogTemplate, {
      data: { heroData: hero },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.confirmDelete(result);
      }
    });
  }

  private confirmDelete(hero: IHero) {
    this.loadingService.show();
    this.heroService
      .deleteHero(hero)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: () => {
          this.loadingService.hide();
          this.getHeroes(0, this.pageSize);
        },
      });
  }

  private getHeroes(pageNumber: number, itemsPerPage: number) {
    this.loadingService.show(); //si fuese una llamada http real no haría falta ya que esta implementado el interceptor;
    this.heroService
      .getMyHeroes(pageNumber, itemsPerPage)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (result: IHeroListResponse) => {
          this.loadingService.hide();
          if (result && result.heroes) {
            this.heroesList = result;
          }
        },
      });
  }
}
