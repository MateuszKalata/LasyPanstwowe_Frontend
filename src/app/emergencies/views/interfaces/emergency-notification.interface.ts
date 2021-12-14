import {XEmergencyNotification} from '../../../models/emergency-notification.model';

export interface IEmergencyNotification {
  showEmergencyNotification(notification: XEmergencyNotification[]): void;
}
