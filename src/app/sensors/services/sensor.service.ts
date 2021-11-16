import { Observable, of } from 'rxjs';
import { XSensor } from '../../models/sensor.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

  constructor(private httpClient: HttpClient) {
  }

  getSensors(): Observable<XSensor[]> {
    return of([
      {
        id: 1,
        name: 'Czujnik 1',
        dateAdded: '11.09.2021',
        geolocation: { latitude: 11, longitude: 22 },
        value: '45',
      },
      {
        id: 2,
        name: 'Czujnik 2',
        dateAdded: '12.09.2021',
        geolocation: { latitude: 12, longitude: 23 },
        value: '46',
      },
      {
        id: 3,
        name: 'Czujnik 3',
        dateAdded: '13.09.2021',
        geolocation: { latitude: 13, longitude: 24 },
        value: '56',
      },
    ]);
  }

  getSensorDetails(id: number): Observable<XSensor> {
    return this.httpClient.get<any>(environment.apiUrl + '/sensor?id=' + id,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res) => {
        console.log(res)
        return {
          ...res[0],
          dateAdded: res[0].date_added,
          geolocation: {latitude: res[0].latitude, longitude: res[0].longitude},
          value: "NaN",

        };
      })
    )
  };
}
