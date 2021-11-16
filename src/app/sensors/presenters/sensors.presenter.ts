import { XSensor } from 'src/app/models/sensor.model';
import { SensorService } from '../services/sensor.service';
import { ISensorViews } from '../views/interfaces/sensor-views.interface';
import { IShowSensorDetails } from './interfaces/show-sensor-details.interface';
import { IShowSensorList } from './interfaces/show-sensor-list.interface';
import { AppInjector } from 'src/app/app.module';

export class SensorPresenter implements IShowSensorList, IShowSensorDetails {
  public sensorViews: ISensorViews;
  public sensorService: SensorService;

  constructor(sensorViews: ISensorViews) {
    this.sensorViews = sensorViews;
    this.sensorService = AppInjector.get(SensorService);
  }
  public onSensorDetailsClicked(id: number): void {
    this.sensorService.getSensorDetails(id).subscribe((sensorDetails: XSensor) => {
      console.log(sensorDetails)
      this.sensorViews.showSensorDetails(sensorDetails);
    })
  }
  public onSensorMeasurementsClicked(id: number): void {
    throw new Error('Method not implemented.');
  }

  public onSensorForForestryClicked(id: number): void {
    this.sensorService.getSensorForForestry(id).subscribe((sensorList: XSensor[]) => {
      this.sensorViews.showSensorListForForestry(sensorList);
    })
  }

  public onSensorListClicked(): void {
    this.sensorService
      .getSensors()
      .subscribe((sensorList: XSensor[]) =>
        this.sensorViews.showSensorList(sensorList)
      );
  }
}
