import { Component, OnInit } from '@angular/core';
import { XSensor } from 'src/app/models/sensor.model';
import { IShowSensorList } from '../../presenters/interfaces/show-sensor-list.interface';
import { SensorPresenter } from '../../presenters/sensors.presenter';
import { SensorService } from '../../services/sensor.service';
import { ISensorViews } from '../interfaces/sensor-views.interface';

@Component({
  selector: 'gmp-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss'],
})
export class SensorListComponent implements OnInit, ISensorViews {
  public columns: string[] = [
    'id',
    'name',
    'coordinates',
    'dateAdded',
    'value',
  ];
  public sensorPresenter: IShowSensorList;
  public sensorList: XSensor[] = [];

  constructor(private sensorService: SensorService) {
    this.sensorPresenter = new SensorPresenter(this, sensorService);
  }

  public ngOnInit(): void {
    this.sensorPresenter.onSensorListClicked();
  }

  public showSensorList(sensorList: XSensor[]): void {
    this.sensorList = sensorList;
  }
}
