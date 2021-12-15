import {MatSnackBar} from '@angular/material/snack-bar';

import {XSensor} from 'src/app/models/sensor.model';
import {SensorService} from '../services/sensor.service';
import {ISensorViews} from '../views/interfaces/sensor-views.interface';
import {IShowSensorDetails} from './interfaces/show-sensor-details.interface';
import {IShowSensorList} from './interfaces/show-sensor-list.interface';
import {AppInjector} from 'src/app/app.module';
import {IAssignSensors} from './interfaces/assign-sensors.interface';
import { XSensorMeasurement } from 'src/app/models/charts';

export class SensorPresenter implements IShowSensorList, IShowSensorDetails, IAssignSensors {
  public sensorViews: ISensorViews;
  public sensorService: SensorService;
  public snackbar: MatSnackBar;

  constructor(sensorViews: ISensorViews) {
    this.sensorViews = sensorViews;
    this.sensorService = AppInjector.get(SensorService);
    this.snackbar = AppInjector.get(MatSnackBar);
  }
  

  public onSensorDetailsClicked(id: number): void {
    this.sensorService.getSensorDetails(id).subscribe((sensorDetails: XSensor) => {
      this.sensorViews.showSensorDetails(sensorDetails);
    });
  }

  public onSensorMeasurementsClicked(id: number): void {
    this.sensorService.getSensorMeasurements(id).subscribe((measurements: XSensorMeasurement[]) => {
      this.sensorViews.showMeasurements(measurements);
    });
  }

  public onSensorForForestryClicked(id: number): void {
    this.sensorService.getSensorForForestry(id).subscribe((sensorList: XSensor[]) => {
      this.sensorViews.showSensorListForForestry(sensorList);
    });
  }

  public onSensorListClicked(): void {
    this.sensorService
      .getSensors()
      .subscribe((sensorList: XSensor[]) =>
        this.sensorViews.showSensorList(sensorList)
      );
  }

  public onAssignSensorClick(sensorId: number): void {
    this.sensorViews.showSensorAssignmentForm(sensorId);
  }

  public onAssignmentFormSubmit(sensorId: number, forestAreaId: number): void {
    this.sensorService.assignSensorToForestArea(sensorId, forestAreaId)
      .subscribe(_ => {
        this.sensorService.getSensors().subscribe(res => {
          this.sensorViews.showSensorList(res);
          this.snackbar.open('Pomyślnie przypisano czujnik.', 'OK', {duration: 3000});
        });
      });
  }
}
