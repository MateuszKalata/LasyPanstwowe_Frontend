import { Observable, of } from 'rxjs';
import { XSensor } from '../../models/sensor.model';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SensorService {

  private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';
  constructor(private httpClient: HttpClient) {}

  public getSensors(): Observable<XSensor[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + '/sensors_not_assinged',
    { headers: new HttpHeaders().set('Authorization',this.AUTH_TOKEN_HARDCODED)}).pipe(
      map((res: any[]) => {
        return res.map(sensors => ({
          id: sensors.id,
          name: sensors.name,
          geolocation: {latitude: sensors.latitude, longitude: sensors.longitude},
          dateAdded: sensors.date_added,
          value: sensors.type
        }));
      })
    );
  }

  public getSensorForForestry(id: number): Observable<XSensor[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + '/sensors',
    { headers: new HttpHeaders().set('Authorization',this.AUTH_TOKEN_HARDCODED),
    params: new HttpParams().set('forestry_id',id)}).pipe(
      map((res: any[]) => {
        return res.map(sensors => ({
          id: sensors.id,
          name: sensors.name,
          geolocation: {latitude: sensors.latitude, longitude: sensors.longitude},
          dateAdded: sensors.date_added,
          value: sensors.type
        }));
      })
    );
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
