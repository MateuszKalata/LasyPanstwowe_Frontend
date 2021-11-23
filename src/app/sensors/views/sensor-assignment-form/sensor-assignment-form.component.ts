import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {ForestryService} from '../../../forestries/services/forestry.service';
import {XForestry} from '../../../models/forestry.model';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'gmp-sensor-assignment-form',
  templateUrl: './sensor-assignment-form.component.html',
  styleUrls: ['./sensor-assignment-form.component.scss'],
})
export class SensorAssignmentFormComponent implements OnInit {

  public forestries: XForestry[] = [];
  public forestAreas: any[] = [];
  public showNoForestAreasLabel: boolean = false;

  public forestryFormControl: FormControl = new FormControl('', Validators.required);
  public forestAreaFormControl: FormControl = new FormControl('', Validators.required);

  constructor(public forestryService: ForestryService,
              private dialogRef: MatDialogRef<SensorAssignmentFormComponent>) {
    this.forestryService.getForestries().subscribe(res => {
      this.forestries = res;
    });
  }

  public ngOnInit(): void {
    this.forestryFormControl.valueChanges.subscribe(forestry => {
      this.forestryService.getForestAreasForForestry(forestry.id).subscribe(res => {
        this.forestAreas = res;
        this.showNoForestAreasLabel = res.length === 0;
      });
    });
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.forestAreaFormControl.valid) {
      this.dialogRef.close(this.forestAreaFormControl.value.id);
    }
  }

}
