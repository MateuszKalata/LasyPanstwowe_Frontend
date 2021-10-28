import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {IForestAreaViews} from '../interfaces/forest-area-views.interface';
import {XForestArea} from '../../../models/forest-area.model';
import {ICreateForestArea} from '../../presenters/interfaces/create-forest-area.interface';
import {ForestryPresenter} from '../../presenters/forestry.presenter';
import {IForestryViews} from '../interfaces/forestry-views.interface';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {ForestAreaCreationFormComponent} from '../forest-area-creation-form/forest-area-creation-form.component';

@Component({
  selector: 'gmp-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.scss'],
})
export class ForestryListComponent implements OnInit, IForestAreaViews, IForestryViews {
  public forestryPresenter: ICreateForestArea;

  constructor(private dialog: MatDialog) {
    this.forestryPresenter = new ForestryPresenter(this);
  }

  public ngOnInit(): void {
  }

  public showForestAreaCreationFailureMessage(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> =
      this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Wystąpił błąd podczas tworzenia obszaru leśnictwa.';
  }

  public showForestAreaCreationForm(): void {

    const dialogRef: MatDialogRef<ForestAreaCreationFormComponent> =
      this.dialog.open(ForestAreaCreationFormComponent);

    dialogRef.afterClosed().subscribe((res: XForestArea | undefined) => {
      console.log(res);
    });
  }

  public showForestAreaDetails(forestArea: XForestArea): void {
  }

  public showForestryList(): void {
  }

}
