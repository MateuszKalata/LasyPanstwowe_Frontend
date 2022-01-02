import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { XForestAction } from "src/app/models/forest-action.model";
import { ForestActionStatusEnum } from "../../enums/forest-action-status.enum";
import { ForestActionTypeEnum } from "../../enums/forest-action-type.enum";
import { ForestActionPresenter } from "../../presenters/forest-action.presenter";
import { IMarkForestActionAsDone } from "../../presenters/interfaces/mark-forest-action-as-done.interface";
import { IShowForestActionList } from "../../presenters/interfaces/show-forest-action-list.interface";
import { IForestActionViews } from "../interfaces/forest-action-views.interface";

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
    public presenter: IShowForestActionList & IMarkForestActionAsDone;

    constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
        this.presenter = new ForestActionPresenter(this);
    }

    ngOnInit(): void {
        this.presenter.onShowForestActionListClicked(this.activatedRoute.snapshot.params.id);
        throw new Error("Method not implemented.");
    }
    showForestActionCreateFailureMessage(): void {
        throw new Error("Method not implemented.");
    }
    showForestActionCreationForm(): void {
        throw new Error("Method not implemented.");
    }
    showForestActionList(data: XForestAction[]): void {
        this.actionList = new MatTableDataSource<XForestAction>(data);
        this.actionList.filterPredicate = (data, filter: string): boolean => {
            return data.type.toLowerCase().includes(filter.toLowerCase());
        }
        this.onFilterSelected(this.filterValue)
    }

    public onFilterSelected(value: any): void {
        this.actionList.filter = value === 'all' ? '' : value;
    }
}