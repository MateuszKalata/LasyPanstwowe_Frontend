import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef} from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { XForestAction } from "src/app/models/forest-action.model";
import { ForestActionStatusEnum } from "../../enums/forest-action-status.enum";
import { ForestActionTypeEnum } from "../../enums/forest-action-type.enum";
import { ForestActionPresenter } from "../../presenters/forest-action.presenter";
import { IMarkForestActionAsDone } from "../../presenters/interfaces/mark-forest-action-as-done.interface";
import { IShowForestActionList } from "../../presenters/interfaces/show-forest-action-list.interface";
import { IForestActionViews } from "../interfaces/forest-action-views.interface";
import {ForestActionDetailsComponent} from '../forest-action-details/forest-action-details.component';
import { ActionCreationFormComponent } from "../forest-action-form/forest-action-form.component";
import { ICreateForestAction } from "../../presenters/interfaces/create-forest-action.interface";
import { MessageDialogComponent } from "src/app/components/message-dialog/message-dialog.component";

@Component({
    selector: 'gmp-forest-action-list',
    templateUrl: './forest-action-list.component.html',
    styleUrls: ['./forest-action-list.component.scss'],
})

export class ForestActionListComponent implements OnInit, IForestActionViews {
    public actionList: MatTableDataSource<XForestAction> = new MatTableDataSource<XForestAction>([]);
    public filterValue: string = 'all';
    public ForestActionTypeEnum = ForestActionTypeEnum;
    public ForestActionStatusEnum = ForestActionStatusEnum;
    public columns: string[] = ['id', 'type', 'status', 'startDate', 'endDate', 'actions']
    public presenter: IShowForestActionList & IMarkForestActionAsDone & ICreateForestAction;

    constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
        this.presenter = new ForestActionPresenter(this, undefined);
    }

    public ngOnInit(): void {
        this.presenter.onShowForestActionListClicked(this.activatedRoute.snapshot.params.id);
        throw new Error('Method not implemented.');
    }

    showForestActionCreateMessage(): void {
        const messageDialogRef: MatDialogRef<MessageDialogComponent> =
            this.dialog.open(MessageDialogComponent);
          messageDialogRef.componentInstance.message = "Akcja leśna została utworzona"
    }

    showForestActionCreateFailureMessage(message: string): void {
        const messageDialogRef: MatDialogRef<MessageDialogComponent> =
            this.dialog.open(MessageDialogComponent);
          messageDialogRef.componentInstance.message = message;
    }
   
    showForestActionList(data: XForestAction[]): void {
        this.actionList = new MatTableDataSource<XForestAction>(data);
        this.actionList.filterPredicate = (data, filter: string): boolean => {
            return data.type.toLowerCase().includes(filter.toLowerCase());
        }
        this.onFilterSelected(this.filterValue)
    }

    public showForestActionDetailsClicked(id: string): void {
      this.dialog.open(ForestActionDetailsComponent, {
        data: {
          id,
        },
      });
    }

    public onFilterSelected(value: any): void {
        this.actionList.filter = value === 'all' ? '' : value;
    }

    public onCreateForestActionClicked(): void {
        this.presenter.onCreateForestActionClicked();
    }

    public showForestActionCreationForm(): void {
        const dialogRef: MatDialogRef<ActionCreationFormComponent> = this.dialog.open(ActionCreationFormComponent, {
            autoFocus: false,
            maxHeight: '90vh',
            data: window.history.state.forestryAreas
        });
        dialogRef.afterClosed().subscribe((res: XForestAction | undefined) => {
            if (res) {
              this.presenter.onForestActionSave(res);
            }
          }
        );
      }
}
