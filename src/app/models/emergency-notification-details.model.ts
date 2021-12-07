import {GeolocationModel} from './geolocation.model';
import {XSensorMeasurement} from './sensor-measurement.model';

export interface XEmergencyNotificationDetails {
  geolocation: GeolocationModel;
  measurements: XSensorMeasurement[];
}
