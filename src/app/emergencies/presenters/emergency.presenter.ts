import {IShowEmergencyDetails} from './interfaces/show-emergency-details.interface';
import {IResolveEmergency} from './interfaces/resolve-emergency.interface';
import {IShowEmergencyList} from './interfaces/show-emergency-list.interface';
import {AppInjector} from '../../app.module';
import {IEmergencyViews} from '../views/interfaces/emergency-views.interface';
import {EmergencyService} from '../services/emergency.service';
import {IEmergencyDetailViews} from '../views/interfaces/emergency-detail-views.interface';
import {XEmergencyNotificationDetails} from '../../models/emergency-notification-details.model';
import {XEmergencyNotificationList} from '../../models/emergency-notification-list.model';

export class EmergencyPresenter implements IShowEmergencyDetails, IResolveEmergency, IShowEmergencyList {
  public emergencyDetailViews: IEmergencyDetailViews | undefined;
  public emergencyViews: IEmergencyViews | undefined;
  private emergencyService: EmergencyService;

  constructor(emergencyViews?: IEmergencyViews) {
    if (emergencyViews) {
      this.emergencyViews = emergencyViews;
    }
    this.emergencyService = AppInjector.get(EmergencyService);
  }

  public onEmergencyDetailsClicked(id: number): void {
    this.emergencyService.getEmergencyNotification(id).subscribe((emergency: XEmergencyNotificationDetails) => {
      this.emergencyDetailViews?.showEmergencyDetails(emergency);
    });
  }

  public onEmergencyListClicked(): void {
    this.emergencyService.getEmergencyNotifications().subscribe((emergencies: XEmergencyNotificationList) => {
      this.emergencyViews?.showEmergencyList(emergencies);
    });
  }

  public onResolveEmergencyClicked(id: number): void {
    this.emergencyService.markEmergencyAsResolved(id).subscribe((value: number) => {
      this.emergencyDetailViews?.showEmergencySuccessfullyResolvedMsg();
    }, error => {
      this.emergencyDetailViews?.showEmergencyAlreadyResolvedMsg();
    });
  }

}
