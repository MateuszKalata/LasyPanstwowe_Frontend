import { Component, Inject, OnInit } from '@angular/core';
import { XSensor } from 'src/app/models/sensor.model';

@Component({
    selector: 'gmp-sensor-details',
    templateUrl: './sensor-details.component.html',
    styleUrls: ['./sensor-details.component.scss']
})


export class SensorDetailsComponent implements OnInit {
    public data : XSensor|undefined;
    constructor() {
        //this.data is available! yay!
    }

    ngOnInit(): void {
    }

}
