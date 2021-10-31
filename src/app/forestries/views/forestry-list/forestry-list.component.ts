import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {IForestAreaViews} from '../interfaces/forest-area-views.interface';
import {XForestArea} from '../../../models/forest-area.model';
import {ICreateForestArea} from '../../presenters/interfaces/create-forest-area.interface';
import {ForestryPresenter} from '../../presenters/forestry.presenter';
import {IForestryViews} from '../interfaces/forestry-views.interface';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {ForestAreaCreationFormComponent} from '../forest-area-creation-form/forest-area-creation-form.component';
import {XForestry} from "../../../models/forestry.model";
import {ForestryService} from "../../services/forestry.service";
import {ForestryCreationFormComponent} from "../forestry-creation-form/forestry-creation-form.component";
import {ForestryDetailsComponent} from "../forestry-details/forestry-details.component";
import {ICreateForestry} from "../../presenters/interfaces/create-forestry.interface";
import {IShowForestryDetails} from "../../presenters/interfaces/show-forestry-details.interface";
import {IShowForestryList} from "../../presenters/interfaces/show-forestry-list.interface";
import {ForestationTypeEnum} from "../../../enums/forestation-type.enum";

@Component({
  selector: 'gmp-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.scss'],
})
export class ForestryListComponent implements OnInit, IForestAreaViews, IForestryViews {
  public displayedColumns: string[] = ['name', 'surface', 'typesOfForestation'];
  public forestryPresenter: ICreateForestArea & ICreateForestry & IShowForestryDetails & IShowForestryList;
  public forestryList: XForestry[] = [];

  constructor(private dialog: MatDialog, private forestryService: ForestryService) {
    this.forestryPresenter = new ForestryPresenter(this, forestryService);
  }

  public ngOnInit(): void {
    this.forestryPresenter.onForestryListClicked();
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

  public showForestryList(forestryList: XForestry[]): void {
    this.forestryList = forestryList;
  }

  showForestryCreationFailureMessage(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> = this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Wystąpił błąd podczas tworzenia leśnictwa.';
  }

  showForestryCreationForm(): void {
    const dialogRef: MatDialogRef<ForestryCreationFormComponent> = this.dialog.open(ForestryCreationFormComponent);
    dialogRef.afterClosed().subscribe((res: XForestry | undefined) => {
        if (res) {
          this.forestryPresenter.onCreateForestrySave(res);
        }
      }
    );
  }

  showForestryDetails(forestryDetails: XForestry): void {
    //change this when ForestryDetailsComponent implemented
    this.dialog.open(ForestryDetailsComponent);
  }
}
