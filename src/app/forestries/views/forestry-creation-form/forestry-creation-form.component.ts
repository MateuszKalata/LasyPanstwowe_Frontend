import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

import {XForestry} from '../../../models/forestry.model';

@Component({
  selector: 'gmp-forestry-creation-form',
  templateUrl: './forestry-creation-form.component.html',
  styleUrls: ['./forestry-creation-form.component.scss'],
})
export class ForestryCreationFormComponent implements OnInit {

  public newForestryFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surface: new FormControl('', Validators.required),
    typesOfForestation: new FormControl('BROADLEAF', Validators.required),
  });

  constructor(private dialogRef: MatDialogRef<ForestryCreationFormComponent>) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.newForestryFormGroup.valid) {
      const data: XForestry = {
        name: this.newForestryFormGroup.controls.name.value,
        surface: this.newForestryFormGroup.controls.surface.value,
      };
      this.dialogRef.close(data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
