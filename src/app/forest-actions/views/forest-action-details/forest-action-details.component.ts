import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {XForestAction} from '../../../models/forest-action.model';
import {IShowForestActionDetails} from '../../presenters/interfaces/show-forest-action-details.interface';
import {ForestActionPresenter} from '../../presenters/forest-action.presenter';
import {IForestActionDetailsView} from '../interfaces/forest-action-details-view.interface';

@Component({
  selector: 'gmp-forest-action-details',
  templateUrl: './forest-action-details.component.html',
  styleUrls: ['./forest-action-details.component.scss'],
})
export class ForestActionDetailsComponent implements OnInit, IForestActionDetailsView {
  public forestAction: XForestAction | undefined;
  public forestActionPresenter: IShowForestActionDetails;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number }) {
    this.forestActionPresenter = new ForestActionPresenter(undefined, this);
  }

  public ngOnInit(): void {
    this.forestActionPresenter.onShowForestActionDetailsClicked(this.data.id);
  }

  public showForestActionDetails(action: XForestAction): void {
    this.forestAction = action;
  }

}
