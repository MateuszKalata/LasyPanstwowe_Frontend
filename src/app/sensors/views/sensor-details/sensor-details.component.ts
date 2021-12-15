import { Component, Inject, OnInit } from '@angular/core';
import { XSensor } from 'src/app/models/sensor.model';
import { chart, XSensorMeasurement } from 'src/app/models/charts';
import { IShowSensorDetails } from '../../presenters/interfaces/show-sensor-details.interface';
import { SensorPresenter } from '../../presenters/sensors.presenter';
import { IShowSensorList } from '../../presenters/interfaces/show-sensor-list.interface';
import { IAssignSensors } from '../../presenters/interfaces/assign-sensors.interface';
import { ISensorViews } from '../interfaces/sensor-views.interface';

@Component({
    selector: 'gmp-sensor-details',
    templateUrl: './sensor-details.component.html',
    styleUrls: ['./sensor-details.component.scss']
})

export class SensorDetailsComponent implements OnInit {

// public sensorPresenter: IShowSensorList & IShowSensorDetails & IAssignSensors;
 public data : XSensor|undefined;
 public chart: any; 

  view: [number, number] = [700, 370];
  // chart: any[] | undefined;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dni tygodnia';
  yAxisLabel: string = 'Wartość';
  timeline: boolean = true;
  buttonClicked = false;

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

    constructor() {
     // this.sensorPresenter = new SensorPresenter();
        // Object.assign(this, { chart });
        
    }

    onSensorMeasurementClicked(){
      this.buttonClicked = !this.buttonClicked;
    }

    ngOnInit(): void {
    }

}
