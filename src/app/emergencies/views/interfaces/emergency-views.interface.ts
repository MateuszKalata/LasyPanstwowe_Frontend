import {XEmergencyNotificationList} from '../../../models/emergency-notification-list.model';

export interface IEmergencyViews {
  showEmergencyList(notifications: XEmergencyNotificationList): void;
}
