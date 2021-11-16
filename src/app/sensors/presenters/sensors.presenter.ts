import { XSensor } from 'src/app/models/sensor.model';
import { SensorService } from '../services/sensor.service';
import { ISensorViews } from '../views/interfaces/sensor-views.interface';
import { IShowSensorDetails } from './interfaces/show-sensor-details.interface';
import { IShowSensorList } from './interfaces/show-sensor-list.interface';

export class SensorPresenter implements IShowSensorList, IShowSensorDetails {
  public sensorViews: ISensorViews;
  public sensorService: SensorService;

  constructor(sensorViews: ISensorViews, sensorService: SensorService) {
    this.sensorViews = sensorViews;
    this.sensorService = sensorService;
  }
  public onSensorDetailsClicked(id: number): void {
    this.sensorService.getSensorDetails(id).subscribe((sensorDetails: XSensor) => {
      this.sensorViews.showSensorDetails(sensorDetails);
    })
  }
  public onSensorMeasurementsClicked(id: number): void {
    throw new Error('Method not implemented.');
  }

  public onSensorListClicked(): void {
    this.sensorService
      .getSensors()
      .subscribe((sensorList: XSensor[]) =>
        this.sensorViews.showSensorList(sensorList)
      );
  }
}
