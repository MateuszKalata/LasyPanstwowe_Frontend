import {XEmergencyNotification} from '../../../models/emergency-notification.model';

export interface IShowEmergencyList {
  onEmergencyListClicked(): void;
  refreshEmergencyNotifications(notification: XEmergencyNotification[]): void;
}
