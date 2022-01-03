import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { XForestAction } from 'src/app/models/forest-action.model';
import { ForestActionStatusEnum } from '../../enums/forest-action-status.enum';
import { ForestActionTypeEnum } from '../../enums/forest-action-type.enum';
import { ForestActionPresenter } from '../../presenters/forest-action.presenter';
import { IMarkForestActionAsDone } from '../../presenters/interfaces/mark-forest-action-as-done.interface';
import { IShowForestActionList } from '../../presenters/interfaces/show-forest-action-list.interface';
import { IForestActionViews } from '../interfaces/forest-action-views.interface';
import {ForestActionDetailsComponent} from '../forest-action-details/forest-action-details.component';

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
    public columns: string[] = ['id', 'type', 'status', 'startDate', 'endDate', 'actions'];
    public presenter: IShowForestActionList & IMarkForestActionAsDone;

    constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
        console.log(activatedRoute);
        this.presenter = new ForestActionPresenter(this, undefined);
    }

    public ngOnInit(): void {
        this.presenter.onShowForestActionListClicked(this.activatedRoute.snapshot.params.id);
        throw new Error('Method not implemented.');
    }
    public showForestActionCreateFailureMessage(): void {
        throw new Error('Method not implemented.');
    }
    public showForestActionCreationForm(): void {
        throw new Error('Method not implemented.');
    }
    public showForestActionList(data: XForestAction[]): void {
        this.actionList = data;
    }

    public showForestActionDetailsClicked(id: string): void {
      this.dialog.open(ForestActionDetailsComponent, {
        data: {
          id,
        },
      });
    }

    public onFilterSelected(value: any): void {
        console.log(value);
      }
}
