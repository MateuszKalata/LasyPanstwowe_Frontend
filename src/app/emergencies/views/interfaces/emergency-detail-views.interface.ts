import {XEmergencyNotificationDetails} from '../../../models/emergency-notification-details.model';

export interface IEmergencyDetailViews {
  showEmergencyAlreadyResolvedMsg(): void;
  showEmergencyDetails(details: XEmergencyNotificationDetails): void;
  showEmergencySuccessfullyResolvedMsg(): void;
}
