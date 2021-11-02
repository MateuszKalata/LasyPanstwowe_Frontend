import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {XForestry} from '../../../models/forestry.model';

@Component({
  selector: 'gmp-forestry-details',
  templateUrl: './forestry-details.component.html',
  styleUrls: ['./forestry-details.component.scss'],
})
export class ForestryDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: XForestry) { }

}
