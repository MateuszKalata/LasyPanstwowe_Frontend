import {ICreateForestArea} from './interfaces/create-forest-area.interface';
import {XForestArea} from '../../models/forest-area.model';
import {IForestAreaViews} from '../views/interfaces/forest-area-views.interface';
import {IForestryViews} from '../views/interfaces/forestry-views.interface';

export class ForestryPresenter implements ICreateForestArea {
  public forestryViews: IForestAreaViews;

  constructor(forestryViews: IForestAreaViews & IForestryViews) {
    this.forestryViews = forestryViews;
  }

  public onCreateForestAreaClicked(): void {
    this.forestryViews.showForestAreaCreationForm();
  }

  public onCreateForestAreaSave(forestArea: XForestArea): void {
    this.forestryViews.showForestAreaDetails(forestArea);
  }
}
