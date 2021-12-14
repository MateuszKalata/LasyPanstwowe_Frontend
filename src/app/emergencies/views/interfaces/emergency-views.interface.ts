import {XEmergencyNotification} from '../../../models/emergency-notification.model';

export interface IEmergencyViews {
  showEmergencyList(notifications: XEmergencyNotification[]): void;
}
