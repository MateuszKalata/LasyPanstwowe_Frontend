import {IForestryDetailsViews} from '../views/interfaces/forestry-details-views.interface';
import {ICreateForestArea} from './interfaces/create-forest-area.interface';
import {IShowForestryDetails} from './interfaces/show-forestry-details.interface';
import {XForestArea} from '../../models/forest-area.model';
import {XForestry} from '../../models/forestry.model';
import {ForestryService} from '../services/forestry.service';
import {AppInjector} from '../../app.module';

export class ForestryDetailsPresenter implements ICreateForestArea, IShowForestryDetails {
  public forestryDetailsViews: IForestryDetailsViews;
  public forestryService: ForestryService;

  constructor(forestryDetailsViews: IForestryDetailsViews) {
    this.forestryDetailsViews = forestryDetailsViews;
    this.forestryService = AppInjector.get(ForestryService);
  }

  public onCreateForestAreaClicked(): void {
    this.forestryDetailsViews.showForestAreaCreationForm();
  }

  public onCreateForestAreaSave(forestArea: XForestArea): void {
    this.forestryDetailsViews.showForestAreaDetails(forestArea);
  }

  public onForestryDetailsClicked(id: number): void {
    this.forestryService.getForestry(id).subscribe((forestry: XForestry) =>
      this.forestryDetailsViews.showForestryDetails(forestry));
  }
}
