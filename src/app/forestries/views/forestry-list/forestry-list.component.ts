import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {ForestryPresenter} from '../../presenters/forestry.presenter';
import {IForestryViews} from '../interfaces/forestry-views.interface';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {XForestry} from '../../../models/forestry.model';
import {ForestryCreationFormComponent} from '../forestry-creation-form/forestry-creation-form.component';
import {ICreateForestry} from '../../presenters/interfaces/create-forestry.interface';
import {IShowForestryList} from '../../presenters/interfaces/show-forestry-list.interface';

@Component({
  selector: 'gmp-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.scss'],
})
export class ForestryListComponent implements OnInit, AfterViewInit, IForestryViews {
  public displayedColumns: string[] = ['name', 'surface', 'actions'];
  public forestryPresenter: ICreateForestry & IShowForestryList;
  public forestryDataSource: MatTableDataSource<XForestry> = new MatTableDataSource<XForestry>([]);
  @ViewChild(MatSort) public sort: MatSort | undefined;

  constructor(private dialog: MatDialog, private router: Router) {
    this.forestryPresenter = new ForestryPresenter(this);
  }

  public ngOnInit(): void {
    this.forestryPresenter.onForestryListClicked();
  }

  public ngAfterViewInit(): void {
    this.forestryDataSource.sort = this.sort ? this.sort : null;
  }

  public showForestryList(forestryList: XForestry[]): void {
    this.forestryDataSource = new MatTableDataSource<XForestry>(forestryList);
  }

  public showForestryCreationFailureMessage(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> = this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Wystąpił błąd podczas tworzenia leśnictwa.';
  }

  public showForestryCreationForm(): void {
    const dialogRef: MatDialogRef<ForestryCreationFormComponent> = this.dialog.open(ForestryCreationFormComponent);
    dialogRef.afterClosed().subscribe((res: XForestry | undefined) => {
        if (res) {
          this.forestryPresenter.onCreateForestrySave(res);
        }
      }
    );
  }

  public onForestryDetailsClicked(id: string): void {
    this.router.navigate(['/forestries', id]);
  }

  public onCreateForestryClicked(): void {
    this.forestryPresenter.onCreateForestryClicked();
  }
}
