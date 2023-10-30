export interface IHero {
  id?: number;
  name: string;
  company: string;
}

export interface IHeroResponse {
  hero: IHero;
}

export interface IHeroListResponse {
  heroes: IHero[];
  size: number;
}
