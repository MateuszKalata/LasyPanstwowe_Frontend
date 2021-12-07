import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {XEmergencyNotificationDetails} from '../../models/emergency-notification-details.model';
import {XEmergencyNotificationList} from '../../models/emergency-notification-list.model';

@Injectable({
  providedIn: 'root',
})
export class EmergencyService {
  private EMERGENCY_API_URL: string = '';

  constructor(private http: HttpClient) {
  }

  public getEmergencyNotification(id: number): Observable<XEmergencyNotificationDetails> {
    return of({
      geolocation: {
        latitude: 1,
        longitude: 1,
      },
      measurements: [
        {
          measurement_id: 1,
          sensor_id: 1,
          timestamp: (new Date()).toString(),
          value: 25,
        },
        {
          measurement_id: 2,
          sensor_id: 2,
          timestamp: (new Date()).toString(),
          value: 99,
        },
      ],
    });
  }

  public getEmergencyNotifications(): Observable<XEmergencyNotificationList> {
    return of({
        notifications: [
          {
            emergency_id: 1,
            emergency_status: 1,
            emergency_type: 1,
            sensor_id: 1,
          },
        ],
      }
    );
  }

  public markEmergencyAsResolved(id: number): Observable<number> {
    return of(1);
  }
}
