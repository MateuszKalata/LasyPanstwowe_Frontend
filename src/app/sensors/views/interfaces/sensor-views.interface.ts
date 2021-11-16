import { XSensor } from 'src/app/models/sensor.model';

export interface ISensorViews {
  showSensorList(sensorList: XSensor[]): void;
  showSensorDetails(sensor: XSensor) : void;
}
