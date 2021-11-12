import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {XForestryDetails} from '../../../models/forestry-details.model';

@Component({
  selector: 'gmp-forestry-details',
  templateUrl: './forestry-details.component.html',
  styleUrls: ['./forestry-details.component.scss'],
})
export class ForestryDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: XForestryDetails) { }

}
