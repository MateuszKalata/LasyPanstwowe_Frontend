import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {XForestry} from '../../models/forestry.model';
import {XForestryDetails} from '../../models/forestry-details.model';

@Injectable({
  providedIn: 'root',
})
export class ForestryService {

  constructor() { }

  public getForestries(): Observable<XForestry[]> {
    return of ([
      {id: 1, name: 'Leśnictwo 1', surface: 30},
      {id: 2, name: 'Leśnictwo 2', surface: 40},
      {id: 1, name: 'Leśnictwo 3', surface: 50},
    ]);
  }

  public getForestry(id: number): Observable<XForestryDetails> {
    return of(
      {id: 1, name: 'Leśnictwo 1', surface: 30, forestryAreas: [{name: 'Obszar leśny 1', geolocation: {latitude: 11, longitude: 11}}]}
    );
  }

  public createForestry(forestry: XForestry): Observable<void> {
    return of();
  }
}
