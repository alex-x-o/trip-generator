import { Pipe, PipeTransform } from '@angular/core';
import { Destinations } from '../models/destinations.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(destinations: Destinations[], category: string): any {
    let filteredDestinations: any = [];
    console.log(category);
    filteredDestinations = destinations.filter(destination => {
      return (destination.categories.indexOf(category) >= 0);
    });
    console.log(filteredDestinations);
    let dest = filteredDestinations[Math.floor(Math.random() * filteredDestinations.length)];
    console.log(dest);
    let oneDestination: any = [];
    oneDestination.push(dest);
    console.log(oneDestination);
    let array = Object.values(dest);
    console.log(array);
    return oneDestination;
  }

}
