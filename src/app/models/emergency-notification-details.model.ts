import {EmergencyStatusEnum} from '../emergencies/enums/emergency-status.enum';
import {EmergencyTypeEnum} from '../emergencies/enums/emergency-type.enum';

export interface XEmergencyNotificationDetails {
  emergency_id: number;
  emergency_status: EmergencyStatusEnum;
  emergency_type: EmergencyTypeEnum;
  sensor_id: number;
  emergency_timestamp: Date;
  emergency_value: number;
}
