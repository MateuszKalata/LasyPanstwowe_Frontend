import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {XForestry} from '../../models/forestry.model';
import {XForestryDetails} from '../../models/forestry-details.model';
import {ForestationTypeEnum} from '../../enums/forestation-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ForestryService {

  constructor() {}

  public getForestries(): Observable<XForestry[]> {
    return of([
      {id: 234, name: 'Leśnictwo 1', surface: 30},
      {id: 2, name: 'Leśnictwo 2', surface: 9},
      {id: 1, name: 'Leśnictwo 3', surface: 205},
    ]);
  }

  public getForestry(id: number): Observable<XForestryDetails> {
    return of(
      {
        id: 1, name: 'Leśnictwo 1', surface: 30, forestAreas: [
          {
            name: 'Obszar leśny 1',
            geolocation: {latitude: 11, longitude: 11},
            surface: 30,
            typeOfForestation: ForestationTypeEnum.BROADLEAF,
          },
          {
            name: 'Obszar leśny 2',
            geolocation: {latitude: 11, longitude: 11},
            surface: 20,
            typeOfForestation: ForestationTypeEnum.BROADLEAF,
          },
        ],
      }
    );
  }

  public createForestry(forestry: XForestry): Observable<void> {
    return of();
  }
}
