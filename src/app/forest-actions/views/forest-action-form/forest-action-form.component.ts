import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { XForestAction } from '../../../models/forest-action.model';

@Component({
  selector: 'gmp-forest-action-form',
  templateUrl: './forest-action-form.component.html',
  styleUrls: ['./forest-action-form.component.scss'],
})
export class ActionCreationFormComponent implements OnInit {
  public newActionFormGroup: FormGroup = new FormGroup(
    {
      range: new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
      }),
      type: new FormControl('', [Validators.required]),
      forestryAreaX: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      coordinator: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      additionalInfo: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      specialCondition: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      teamSize: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      selectedTree: new FormControl('', [Validators.required]),
    },
    { updateOn: 'submit' }
  );
  forestryArea = [];

  constructor(
    private dialogRef: MatDialogRef<ActionCreationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: []
  ) {
    this.forestryArea = data;
  }

  public ngOnInit(): void {}

  public noWhitespaceValidator(
    control: FormControl
  ): null | { whitespace: boolean } {
    const whitespace: boolean = (control.value || '').trim().length === 0;
    return !whitespace ? null : { whitespace: true };
  }

  public onSubmit(): void {
    if (this.newActionFormGroup.valid) {
      const data: XForestAction = {
        endDate: this.newActionFormGroup.get('range.endDate')?.value,
        forestAreaId: this.newActionFormGroup.controls.forestryAreaX.value,
        startDate: this.newActionFormGroup.get('range.startDate')?.value,
        type: this.newActionFormGroup.controls.type.value,
        status: this.newActionFormGroup.controls.status.value,
        additionalInfo: this.newActionFormGroup.controls.additionalInfo.value,
        teamLeader: this.newActionFormGroup.controls.coordinator.value,
        teamSize: this.newActionFormGroup.controls.teamSize.value,
        special_condition:
          this.newActionFormGroup.controls.specialCondition.value,
        numberOfTreesToProceed: this.newActionFormGroup.controls.quantity.value,
        treeType: this.newActionFormGroup.controls.selectedTree.value,
      };
      this.dialogRef.close(data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
