import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ForestryPresenter} from '../../presenters/forestry.presenter';
import {IForestryViews} from '../interfaces/forestry-views.interface';
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
  public displayedColumns: string[] = ['id', 'name', 'surface', 'actions'];
  public forestryPresenter: ICreateForestry & IShowForestryList;
  public forestryDataSource: MatTableDataSource<XForestry> = new MatTableDataSource<XForestry>([]);
  @ViewChild(MatSort) public sort: MatSort | undefined;

  constructor(private dialog: MatDialog, private router: Router, private snackbar: MatSnackBar,
              private changeDetector: ChangeDetectorRef) {
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
    this.changeDetector.detectChanges();
    this.forestryDataSource.sort = this.sort ? this.sort : null;
  }

  public showForestryCreationFailureMessage(): void {
    this.snackbar.open('Wystąpił błąd podczas tworzenia nowego leśnictwa.', 'OK', {duration: 3000});
  }

  public showForestryCreationSuccessMessage(): void {
    this.snackbar.open('Pomyślnie dodano nowe leśnictwo.', 'OK', {duration: 3000});
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
