import {IShowEmergencyList} from './interfaces/show-emergency-list.interface';
import {AppInjector} from '../../app.module';
import {IEmergencyViews} from '../views/interfaces/emergency-views.interface';
import {EmergencyService} from '../services/emergency.service';
import {IEmergencyNotification} from '../views/interfaces/emergency-notification.interface';
import {XEmergencyNotification} from '../../models/emergency-notification.model';

export class EmergencyPresenter implements IShowEmergencyList {
  public emergencyViews: IEmergencyViews | undefined;
  public emergencyNotificationView: IEmergencyNotification | undefined;
  private emergencyService: EmergencyService;

  constructor(emergencyViews?: IEmergencyViews, emergencyNotificationView?: IEmergencyNotification) {
    this.emergencyViews = emergencyViews;
    this.emergencyNotificationView = emergencyNotificationView;
    this.emergencyService = AppInjector.get(EmergencyService);
    this.observeEmergencyNotifications();
  }

  public onEmergencyListClicked(): void {
    this.emergencyService.getEmergencyNotifications().subscribe((emergencies: XEmergencyNotification[]) => {
      this.emergencyViews?.showEmergencyList(emergencies);
    });
  }

  public refreshEmergencyNotifications(notification: XEmergencyNotification[]): void {
    this.emergencyNotificationView?.showEmergencyNotification(notification);
    this.onEmergencyListClicked();
  }

  private observeEmergencyNotifications(): void {
    this.emergencyService.emergencyNotificationSubject.subscribe((notification) => {
      if (notification) {
        this.refreshEmergencyNotifications(notification);
      }
    });
  }

}
