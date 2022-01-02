import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
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
    public actionList: XForestAction[] = [];
    public filterValue: string = 'all';
    public ForestActionTypeEnum = ForestActionTypeEnum;
    public ForestActionStatusEnum = ForestActionStatusEnum;
    public columns: string[] = ['id', 'type', 'status', 'startDate', 'endDate', 'actions']
    public presenter: IShowForestActionList & IMarkForestActionAsDone;

    constructor(private dialod: MatDialog) {
        this.presenter = new ForestActionPresenter(this);
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    showForestActionCreateFailureMessage(): void {
        throw new Error("Method not implemented.");
    }
    showForestActionCreationForm(): void {
        throw new Error("Method not implemented.");
    }
    showForestActionList(data: XForestAction[]): void {
        throw new Error("Method not implemented.");
    }

    public onFilterSelected(value: any): void {
        console.log(value)
      }
}