import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

import {XForestArea} from '../../../models/forest-area.model';

@Component({
  selector: 'gmp-forest-area-creation-form',
  templateUrl: './forest-area-creation-form.component.html',
  styleUrls: ['./forest-area-creation-form.component.scss'],
})
export class ForestAreaCreationFormComponent implements OnInit {

  public newForestAreaFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
  });

  constructor(private dialogRef: MatDialogRef<ForestAreaCreationFormComponent>) {
  }

  public ngOnInit(): void {
    // this.newForestAreaFormGroup.controls.name.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }

  public onSubmit(): void {
    if (this.newForestAreaFormGroup.valid) {
      const data: XForestArea = {
        name: this.newForestAreaFormGroup.controls.name.value,
        geolocation: {
          latitude: this.newForestAreaFormGroup.controls.latitude.value,
          longitude: this.newForestAreaFormGroup.controls.longitude.value,
        },
      };
      this.dialogRef.close(data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }

}
