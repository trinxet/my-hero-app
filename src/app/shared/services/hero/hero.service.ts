import { Injectable } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const HEROES = [
  {
    id: 0,
    name: 'Rocket Raccoon',
    company: 'Marvel',
    url: 'https://www.cinemascomics.com/wp-content/uploads/2021/11/Rocket-Raccoon-James-Gunn-Guardianes-de-la-Galaxia-Marvel-Studios.jpg',
  },
  { id: 1, name: 'Spiderman', company: 'Marvel' },
  { id: 2, name: 'Batman', company: 'DC' },
];

@Injectable({
  providedIn: SharedModule,
})
export class HeroService {
  constructor() {}
  public _heroesList: any;

  public getMyHeroes(pageNumber: number, itemsPerPage: number) {
    if (!this._heroesList) {
      this._heroesList = HEROES;
    }
    this.paginateItems(this.getFullInfo(), pageNumber, itemsPerPage);
    return of({
      heroes: this.paginateItems(this.getFullInfo(), pageNumber, itemsPerPage),
      size: this._heroesList.length,
    }).pipe(delay(2000));
  }

  public filterById(id: number) {
    const elementFilter = this.getFullInfo().filter((el: any) => el.id == id);
    return {
      heroes: elementFilter,
      size: elementFilter.length,
    };
  }

  public filterHeroByName(
    name: string,
    pageNumber: number,
    itemsPerPage: number
  ) {
    const elementFilter = this.getFullInfo().filter(
      (el: any) => el.name.toUpperCase().indexOf(name.toUpperCase()) >= 0
    );
    console.log(elementFilter, pageNumber, itemsPerPage);
    console.log(this.paginateItems(elementFilter, pageNumber, itemsPerPage));
    return {
      heroes: this.paginateItems(elementFilter, pageNumber, itemsPerPage),
      size: elementFilter.length,
    };
  }

  private paginateItems(heroes: any, pageNumber: number, itemsPerPage: number) {
    const begin = pageNumber * itemsPerPage;
    const end = begin + itemsPerPage;
    return heroes.slice(begin, end);
  }

  private getFullInfo() {
    return JSON.parse(JSON.stringify(this._heroesList));
  }
}
