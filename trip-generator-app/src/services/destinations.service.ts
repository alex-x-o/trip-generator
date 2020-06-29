import { Injectable } from '@angular/core';
import { Destinations } from 'src/models/destinations.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private fileName = 'assets/json/destinations.json';

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destinations[]> {
    return this.http.get<Destinations[]>(this.fileName);
  }
}
