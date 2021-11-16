import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {XForestry} from '../../models/forestry.model';
import {XForestryDetails} from '../../models/forestry-details.model';
import {environment} from '../../../environments/environment';
import {XForestArea} from '../../models/forest-area.model';

@Injectable({
  providedIn: 'root',
})
export class ForestryService {
  private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

  constructor(private httpClient: HttpClient) {
  }

  public getForestries(): Observable<XForestry[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + '/forestries',
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res: any[]) => {
        return res.map(forestry => ({
          id: forestry.id,
          name: forestry.name,
          surface: +forestry.surface,
        }));
      })
    );
  }

  public getForestry(id: number): Observable<XForestryDetails> {
    return this.httpClient.get<any>(environment.apiUrl + '/forestry/' + id,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res) => {
        return {
          id: res.id,
          name: res.name,
          surface: +res.surface,
          forestAreas: res.forest_areas.map((el: any) => {
            el.forestationTypes = el.forestation_types;
            return el;
          }),
        };
      })
    );
  }

  public createForestry(forestry: XForestry): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/forestries', forestry,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)});
  }

  public createForestArea(forestArea: XForestArea): Observable<any> {
    const data: any = {
      forestry_id: forestArea.forestryId,
      name: forestArea.name,
      surface: forestArea.surface,
      forestation_types: forestArea.forestationTypes,
    };
    return this.httpClient.post(environment.apiUrl + '/forestareas', data,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)});
  }
}
