import {XEmergencyNotification} from '../../models/emergency-notification.model';

export function getElementsPresentOnlyInFirstArray(first: XEmergencyNotification[], second: XEmergencyNotification[]): XEmergencyNotification[] {
    return first.filter(newElement =>
      !second?.some(oldElement => oldElement.emergency_id === newElement.emergency_id));
}
