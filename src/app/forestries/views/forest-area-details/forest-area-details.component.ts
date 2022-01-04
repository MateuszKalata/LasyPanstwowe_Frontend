import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {XForestArea} from '../../../models/forest-area.model';

@Component({
  selector: 'gmp-forest-area-details',
  templateUrl: './forest-area-details.component.html',
  styleUrls: ['./forest-area-details.component.scss'],
})
export class ForestAreaDetailsComponent {
  public forestAreasColumns: string[] = ['name', 'tree_number'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { forestArea: XForestArea }) { }

}
