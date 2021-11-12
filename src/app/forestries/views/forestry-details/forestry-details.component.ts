import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {XForestryDetails} from '../../../models/forestry-details.model';
import {XForestArea} from '../../../models/forest-area.model';
import {ICreateForestArea} from '../../presenters/interfaces/create-forest-area.interface';
import {IShowForestryDetails} from '../../presenters/interfaces/show-forestry-details.interface';
import {IForestryDetailsViews} from '../interfaces/forestry-details-views.interface';
import {XForestry} from '../../../models/forestry.model';
import {ForestryDetailsPresenter} from '../../presenters/forestry-details.presenter';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {ForestAreaCreationFormComponent} from '../forest-area-creation-form/forest-area-creation-form.component';

@Component({
  selector: 'gmp-forestry-details',
  templateUrl: './forestry-details.component.html',
  styleUrls: ['./forestry-details.component.scss'],
})
export class ForestryDetailsComponent implements OnInit, AfterViewInit, IForestryDetailsViews {
  public forestryDetailsPresenter: ICreateForestArea & IShowForestryDetails;
  public forestryDetails: XForestryDetails | undefined;

  public forestAreasColumns: string[] = ['name', 'surface', 'typeOfForestation'];
  public forestAreasDataSource: MatTableDataSource<XForestArea> = new MatTableDataSource<XForestArea>([]);
  @ViewChild(MatSort) public sort: MatSort | undefined;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) {
    this.forestryDetailsPresenter = new ForestryDetailsPresenter(this);
  }

  public ngOnInit(): void {
    this.forestryDetailsPresenter.onForestryDetailsClicked(+this.activatedRoute.snapshot.params.id);
  }

  public ngAfterViewInit(): void {
    this.forestAreasDataSource.sort = this.sort ? this.sort : null;
  }

  public showForestAreaDetails(forestArea: XForestArea): void {
  }

  public showForestryDetails(forestryDetails: XForestry): void {
    this.forestryDetails = forestryDetails;
    this.forestAreasDataSource = new MatTableDataSource(this.forestryDetails?.forestAreas ? this.forestryDetails.forestAreas : []);
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

  public onCreateForestryAreaClicked(): void {
    this.forestryDetailsPresenter.onCreateForestAreaClicked();
  }
}
