import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';
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

  public getMyHeroes() {
    return of({
      heroes: HEROES,
    }).pipe(delay(2000));
  }
}
