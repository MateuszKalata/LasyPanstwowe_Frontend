import {EmergencyStatusEnum} from '../emergencies/enums/emergency-status.enum';
import {EmergencyTypeEnum} from '../emergencies/enums/emergency-type.enum';
import {XEmergencyMeasurement} from './emergency-measurement.model';

export interface XEmergencyNotification {
  emergency_id: number;
  emergency_status: EmergencyStatusEnum;
  emergency_type: EmergencyTypeEnum;
  sensor_id: number;
  measurements: XEmergencyMeasurement[];
  forestry_name: string;
  forest_area_name: string;
  sensor: XEmergencySensor;
  timestamp: string;
}

export interface XEmergencySensor {
  id: string;
  latitude: number;
  longitude: number;
  type: string;
  unit: string;
}
