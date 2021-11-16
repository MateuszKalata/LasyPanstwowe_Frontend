import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { XSensor } from 'src/app/models/sensor.model';
import { IShowSensorDetails } from '../../presenters/interfaces/show-sensor-details.interface';
import { IShowSensorList } from '../../presenters/interfaces/show-sensor-list.interface';
import { SensorPresenter } from '../../presenters/sensors.presenter';
import { SensorService } from '../../services/sensor.service';
import { ISensorViews } from '../interfaces/sensor-views.interface';
import { SensorDetailsComponent } from '../sensor-details/sensor-details.component';
import {ActivatedRoute} from '@angular/router';

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
  public sensorPresenter: IShowSensorList & IShowSensorDetails;
  public sensorList: XSensor[] = [];

  constructor(private dialog: MatDialog,
              private sensorService: SensorService,
              private activatedRoute: ActivatedRoute) {
    this.sensorPresenter = new SensorPresenter(this);
  }
  public showSensorDetails(sensor: XSensor): void {
    const dialogRef : MatDialogRef<SensorDetailsComponent> = this.dialog.open(SensorDetailsComponent);
    dialogRef.componentInstance.data = sensor;
    // console.log(sensor);
  }

  public ngOnInit(): void {
    this.sensorPresenter.onSensorListClicked();

    // TODO przykładowe przechwytywanie paramsa z urla
    console.log(this.activatedRoute.snapshot.params.id);
  }

  public showSensorList(sensorList: XSensor[]): void {
    this.sensorList = sensorList;
  }
}
