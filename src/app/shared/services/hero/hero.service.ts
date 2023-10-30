import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IHero, IHeroListResponse, IHeroResponse } from '../../interfaces';

const HEROES: IHero[] = [
  {
    id: 0,
    name: 'Rocket Raccoon',
    company: 'Marvel',
  },
  { id: 1, name: 'Spiderman', company: 'Marvel' },
  { id: 2, name: 'Batman', company: 'DC' },
];

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  public _heroesList: IHero[];

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
    const elementFilter = this.getFullInfo().filter((el: IHero) => el.id == id);

    return of({
      hero: elementFilter[0],
    }).pipe(delay(2000));
  }

  public filterHeroByName(
    name: string,
    pageNumber: number,
    itemsPerPage: number
  ): IHeroListResponse {
    const elementFilter = this.getFullInfo().filter(
      (el: IHero) => el.name.toUpperCase().indexOf(name.toUpperCase()) >= 0
    );
    console.log(elementFilter, pageNumber, itemsPerPage);
    console.log(this.paginateItems(elementFilter, pageNumber, itemsPerPage));
    return {
      heroes: this.paginateItems(elementFilter, pageNumber, itemsPerPage),
      size: elementFilter.length,
    };
  }

  public addHero(hero: IHero): Observable<IHeroResponse> {
    const total = this._heroesList.length;
    const lastId = this._heroesList[total - 1].id;
    hero.id = (lastId as number) + 1;
    this._heroesList.push(hero);
    return of({
      hero: hero,
    }).pipe(delay(2000));
  }

  public update(hero: IHero): Observable<IHeroResponse> {
    const position = this.getPosition(hero.id as number);
    this._heroesList[position].name = hero.name;
    this._heroesList[position].company = hero.company;
    return of({
      hero: this._heroesList[position],
    }).pipe(delay(2000));
  }

  public deleteHero(hero: IHero) {
    const position = this.getPosition(hero.id as number);
    if (position > -1) {
      this._heroesList.splice(position, 1);
    }
    return of({
      id: hero.id,
    }).pipe(delay(2000));
  }

  private getPosition(id: number): number {
    return this._heroesList
      .map(function (heroParam: IHero) {
        return heroParam.id;
      })
      .indexOf(id);
  }

  private paginateItems(
    heroes: IHero[],
    pageNumber: number,
    itemsPerPage: number
  ): IHero[] {
    const begin = pageNumber * itemsPerPage;
    const end = begin + itemsPerPage;
    return heroes.slice(begin, end);
  }

  private getFullInfo() {
    return JSON.parse(JSON.stringify(this._heroesList));
  }
}
