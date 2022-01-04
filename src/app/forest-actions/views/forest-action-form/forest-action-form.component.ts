import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { XForestAction } from '../../../models/forest-action.model';
import {XForestArea} from '../../../models/forest-area.model';
import {ForestActionStatusEnum} from '../../enums/forest-action-status.enum';

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
      coordinator: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator,
      ]),
      teamSize: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      selectedTree: new FormControl('', [Validators.required]),
    },
    { updateOn: 'submit' }
  );
  public forestryArea: XForestArea[] = [];

  constructor(
    private dialogRef: MatDialogRef<ActionCreationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: XForestArea[]
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
        end_date: this.newActionFormGroup.get('range.endDate')?.value,
        forest_area_id: this.newActionFormGroup.controls.forestryAreaX.value,
        start_date: this.newActionFormGroup.get('range.startDate')?.value,
        type: this.newActionFormGroup.controls.type.value,
        status: ForestActionStatusEnum.PLANNED,
        additional_info: '',
        team_leader: this.newActionFormGroup.controls.coordinator.value,
        team_size: this.newActionFormGroup.controls.teamSize.value,
        special_condition: '',
        number_of_trees_to_proceed: this.newActionFormGroup.controls.quantity.value,
        tree_type: this.newActionFormGroup.controls.selectedTree.value,
      };
      this.dialogRef.close(data);
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
