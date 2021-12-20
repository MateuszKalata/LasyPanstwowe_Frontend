import {XEmergencyNotification} from '../../../models/emergency-notification.model';

export interface IEmergencyDetailViews {
  showEmergencyAlreadyResolvedMsg(): void;
  showEmergencyDetails(details: XEmergencyNotification): void;
  showEmergencySuccessfullyResolvedMsg(): void;
}
