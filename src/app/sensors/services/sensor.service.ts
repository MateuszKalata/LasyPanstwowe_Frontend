import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {XSensor} from '../../models/sensor.model';
import {environment} from '../../../environments/environment';
import {trDate} from 'src/app/helpers/trDate';

@Injectable({
  providedIn: 'root',
})
export class SensorService {

  private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

  constructor(private httpClient: HttpClient) {
  }

  public getSensors(): Observable<XSensor[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + '/sensors_not_assinged',
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res: any[]) => {
        return res.map(sensors => ({
          id: sensors.id,
          name: sensors.name,
          geolocation: {latitude: sensors.latitude, longitude: sensors.longitude},
          dateAdded: sensors.date_added,
          value: sensors.type,
        }));
      })
    );
  }

  public getSensorForForestry(id: number): Observable<XSensor[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + '/sensors',
      {
        headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED),
        params: new HttpParams().set('forestry_id', id),
      }).pipe(
      map((res: any[]) => {
        return res.map(sensors => ({
          id: sensors.id,
          name: sensors.name,
          geolocation: {latitude: sensors.latitude, longitude: sensors.longitude},
          dateAdded: trDate(sensors.date_added),
          value: sensors.type,
        }));
      })
    );
  }

  public getSensorDetails(id: number): Observable<XSensor> {
    return this.httpClient.get<any>(environment.apiUrl + '/sensor?id=' + id,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res) => {
        return {
          ...res,
          dateAdded: trDate(res.date_added, 'DD.mm.YYYY HH:MM'),
          geolocation: {latitude: res.latitude, longitude: res.longitude},
          value: '0',
        };
      })
    );
  }

  public assignSensorToForestArea(sensorId: number, forestAreaId: number): Observable<void> {
    return this.httpClient.patch<void>(environment.apiUrl + '/assign_sensor', {},
      {
        headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED),
        params: new HttpParams().set('forest_area_id', forestAreaId).set('id', sensorId),
      });
  }
}
