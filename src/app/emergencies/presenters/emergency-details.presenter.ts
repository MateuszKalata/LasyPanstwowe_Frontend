import {IShowEmergencyDetails} from './interfaces/show-emergency-details.interface';
import {EmergencyService} from '../services/emergency.service';
import {IEmergencyDetailViews} from '../views/interfaces/emergency-detail-views.interface';
import {AppInjector} from '../../app.module';
import {XEmergencyNotificationDetails} from '../../models/emergency-notification-details.model';
import {IResolveEmergency} from './interfaces/resolve-emergency.interface';

export class EmergencyDetailsPresenter implements IShowEmergencyDetails, IResolveEmergency {
  private emergencyService: EmergencyService;
  private emergencyDetailViews: IEmergencyDetailViews;

  constructor(emergencyDetailViews: IEmergencyDetailViews) {
    this.emergencyDetailViews = emergencyDetailViews;
    this.emergencyService = AppInjector.get(EmergencyService);
  }

  public onEmergencyDetailsClicked(id: number): void {
    this.emergencyService.getEmergencyNotification(id).subscribe((emergency: XEmergencyNotificationDetails) => {
      this.emergencyDetailViews.showEmergencyDetails(emergency);
    });
  }

  public onResolveEmergencyClicked(id: number): void {
    this.emergencyService.markEmergencyAsResolved(id).subscribe(() => {
      this.emergencyDetailViews.showEmergencySuccessfullyResolvedMsg();
    }, () => {
      this.emergencyDetailViews.showEmergencyAlreadyResolvedMsg();
    });
  }

}
