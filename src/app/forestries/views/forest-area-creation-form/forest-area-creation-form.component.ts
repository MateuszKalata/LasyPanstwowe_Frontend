import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

import {XForestArea, XForestationType} from '../../../models/forest-area.model';

@Component({
  selector: 'gmp-forest-area-creation-form',
  templateUrl: './forest-area-creation-form.component.html',
  styleUrls: ['./forest-area-creation-form.component.scss'],
})
export class ForestAreaCreationFormComponent implements OnInit {

  public forestationTypes: XForestationType[] = [];
  public newForestationTypeName: string = '';
  public newForestationTypeSurface: string = '';

  public newForestAreaFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surface: new FormControl('', Validators.required),
  });

  constructor(private dialogRef: MatDialogRef<ForestAreaCreationFormComponent>) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.newForestAreaFormGroup.valid) {
      const data: XForestArea = {
        name: this.newForestAreaFormGroup.controls.name.value,
        surface: this.newForestAreaFormGroup.controls.surface.value + ' ha',
      };

      if (this.forestationTypes.length > 0) {
        data.forestationTypes = this.forestationTypes;
      }

      this.dialogRef.close(data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public addForestationType(): void {
    this.forestationTypes.push({
      name: this.newForestationTypeName,
      surface: this.newForestationTypeSurface.toString(),
    });
    this.newForestationTypeName = '';
    this.newForestationTypeSurface = '';
  }

}
