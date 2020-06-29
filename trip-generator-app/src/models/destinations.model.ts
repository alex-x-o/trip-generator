import { Activities } from './activities.model';

export class Destinations {
  constructor(public place: string,
              public country: string,
              public description: string,
              public categories: string[],
              public activities: Activities[]) {}
}
