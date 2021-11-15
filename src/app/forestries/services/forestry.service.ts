import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {XForestry} from '../../models/forestry.model';
import {XForestryDetails} from '../../models/forestry-details.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForestryService {
  // token zahardkodowany na stale, bo backend niepotrzebnie dodal autoryzacje
  private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

  constructor(private httpClient: HttpClient) {
  }

  // typy dto zgodne z backendem
  public getForestries(): Observable<XForestry[]> {
    return this.httpClient.get<XForestry[]>(environment.apiUrl + '/forestries',
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)});
    // gdyby nie bylo autoryzacji
    // return this.httpClient.get<XForestry[]>(environment.apiUrl + '/forestries');
  }

  // typy dto niezgodne z backendem, wiec jest mapowanie
  public getForestry(id: number): Observable<XForestryDetails> {
    return this.httpClient.get<any>(environment.apiUrl + '/forestry/' + id,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res) => {
        return {
          id: res.id,
          name: res.name,
          surface: +res.surface, // ta konstrukcja to zamienianie typu string na number (backend zwraca typ string zamiast number)
          forestAreas: res.forest_areas,
        };
      })
    );
  }

  public createForestry(forestry: XForestry): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/forestries', forestry,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)});
  }
}
