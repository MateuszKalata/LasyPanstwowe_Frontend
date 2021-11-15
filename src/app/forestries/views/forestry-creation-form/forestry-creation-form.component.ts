import {Component, OnInit} from '@angular/core';
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
    name: new FormControl('', [Validators.required, this.noWhitespaceValidator,
      Validators.pattern(/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŻżŹź\s\-]*$/), Validators.maxLength(30)]),
    surface: new FormControl('', [Validators.required, Validators.min(0.001), Validators.max(10000)]),
  }, {updateOn: 'submit'});

  constructor(private dialogRef: MatDialogRef<ForestryCreationFormComponent>) {
  }

  public ngOnInit(): void {
  }

  public noWhitespaceValidator(control: FormControl): null | { 'whitespace': boolean } {
    const whitespace: boolean = (control.value || '').trim().length === 0;
    return !whitespace ? null : {'whitespace': true};
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
