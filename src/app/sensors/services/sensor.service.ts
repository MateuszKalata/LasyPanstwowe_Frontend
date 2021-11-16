import { Observable, of } from 'rxjs';
import { XSensor } from '../../models/sensor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  constructor() {}

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
    return of({
      id,
      name: 'Czujnik szczegółowy',
      dateAdded: '11.09.2021',
      geolocation: { latitude: 11, longitude: 22 },
      value: '45',
      unit: '%',
      type: 'Czujnik wilgoci',
      administrator: 'Jan Kowalski',
      forest_area_id: 1,
      status: "assigned"
    });
  }
}
