import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

import {XSensor} from 'src/app/models/sensor.model';
import {IShowSensorDetails} from '../../presenters/interfaces/show-sensor-details.interface';
import {IShowSensorList} from '../../presenters/interfaces/show-sensor-list.interface';
import {SensorPresenter} from '../../presenters/sensors.presenter';
import {SensorService} from '../../services/sensor.service';
import {ISensorViews} from '../interfaces/sensor-views.interface';
import {SensorDetailsComponent} from '../sensor-details/sensor-details.component';
import {IAssignSensors} from '../../presenters/interfaces/assign-sensors.interface';
import {SensorAssignmentFormComponent} from '../sensor-assignment-form/sensor-assignment-form.component';

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
    'actions',
  ];
  public sensorPresenter: IShowSensorList & IShowSensorDetails & IAssignSensors;
  public sensorList: XSensor[] = [];

  constructor(private dialog: MatDialog,
              private sensorService: SensorService,
              private activatedRoute: ActivatedRoute) {
    this.sensorPresenter = new SensorPresenter(this);
  }

  public showSensorDetails(sensor: XSensor): void {
    const dialogRef: MatDialogRef<SensorDetailsComponent> = this.dialog.open(SensorDetailsComponent);
    dialogRef.componentInstance.data = sensor;
  }

  public showSensorAssignmentForm(sensorId: number): void {
    const dialogRef: MatDialogRef<SensorAssignmentFormComponent> = this.dialog.open(SensorAssignmentFormComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.sensorPresenter.onAssignmentFormSubmit(sensorId, res);
    });
  }

  public ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id === undefined) {
      this.sensorPresenter.onSensorListClicked();
    } else {
      this.sensorPresenter.onSensorForForestryClicked(this.activatedRoute.snapshot.params.id);
    }
  }

  public showSensorListForForestry(sensorList: XSensor[]): void {
    this.sensorList = sensorList;
  }

  public showSensorList(sensorList: XSensor[]): void {
    this.sensorList = sensorList;
  }
}
