import { XSensor } from 'src/app/models/sensor.model';
import { XSensorMeasurement } from 'src/app/models/charts';

export interface ISensorViews {
  showSensorList(sensorList: XSensor[]): void;
  showSensorDetails(sensor: XSensor) : void;
  showSensorListForForestry(sensorList: XSensor[]): void;
  showSensorAssignmentForm(sensorId: number): void;
  showMeasurements(sensorMeasurements: XSensorMeasurement[]): void;
}
