import {Injectable} from '@angular/core';
import {IEmergencyDetailViews} from './emergencies/views/interfaces/emergency-detail-views.interface';
import {EmergencyPresenter} from './emergencies/presenters/emergency.presenter';

@Injectable({
  providedIn: 'root',
})
export class InjectorService {
  public _emergencyPresenter: any;

  constructor() {
  }

  public emergencyPresenter(detailsViews: IEmergencyDetailViews): EmergencyPresenter {
    this._emergencyPresenter.emergencyDetailViews = detailsViews;
    return this._emergencyPresenter;
  }
}
