import { XSensor } from 'src/app/models/sensor.model';
import { SensorService } from '../services/sensor.service';
import { ISensorViews } from '../views/interfaces/sensor-views.interface';
import { IShowSensorList } from './interfaces/show-sensor-list.interface';

export class SensorPresenter implements IShowSensorList {
  public sensorViews: ISensorViews;
  public sensorService: SensorService;

  constructor(sensorViews: ISensorViews, sensorService: SensorService) {
    this.sensorViews = sensorViews;
    this.sensorService = sensorService;
  }

  public onSensorListClicked(): void {
    this.sensorService
      .getSensors()
      .subscribe((sensorList: XSensor[]) =>
        this.sensorViews.showSensorList(sensorList)
      );
  }
}
