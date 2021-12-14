import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, BehaviorSubject, interval} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {XEmergencyNotification} from '../../models/emergency-notification.model';
import {environment} from '../../../environments/environment';
import {getElementsPresentOnlyInFirstArray} from '../utils/array.utils';

@Injectable({
  providedIn: 'root',
})
export class EmergencyService {
  public emergencyNotificationSubject: BehaviorSubject<XEmergencyNotification[] | null> = new BehaviorSubject<XEmergencyNotification[] | null>(null);
  private readonly AUTH_TOKEN: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';
  private emergencyNotificationList: XEmergencyNotification[] | null = null;
  private EMERGENCY_API_URL: string = environment.apiUrl + '/emergencynotifications';

  constructor(private http: HttpClient) {
    this.observeNewEmergencyNotification();
  }

  public getEmergencyNotification(id: number): Observable<XEmergencyNotification> {
    return this.http.get<XEmergencyNotification>(this.EMERGENCY_API_URL + `/${id}`, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
  }

  public getEmergencyNotifications(): Observable<XEmergencyNotification[]> {
    return this.http.get<XEmergencyNotification[]>(this.EMERGENCY_API_URL, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
  }

  public markEmergencyAsResolved(id: number): Observable<any> {
    return this.http.post(this.EMERGENCY_API_URL + `/${id}/resolve`, null, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
  }

  public observeNewEmergencyNotification(): void {
    interval(3000).pipe(
      switchMap(() => this.getEmergencyNotifications())
    ).subscribe(res => {
      const newEmergencyNotifications: XEmergencyNotification[] = this.emergencyNotificationList !== null ?
        getElementsPresentOnlyInFirstArray(res, this.emergencyNotificationList) : [];
      if (newEmergencyNotifications.length) {
        this.emergencyNotificationSubject.next(newEmergencyNotifications);
      }
      this.emergencyNotificationList = res;
    });
  }
}
