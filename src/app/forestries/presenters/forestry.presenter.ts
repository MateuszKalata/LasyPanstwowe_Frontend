import {ICreateForestArea} from './interfaces/create-forest-area.interface';
import {XForestArea} from '../../models/forest-area.model';
import {IForestAreaViews} from '../views/interfaces/forest-area-views.interface';
import {IForestryViews} from '../views/interfaces/forestry-views.interface';
import {ForestryService} from '../services/forestry.service';
import {ICreateForestry} from './interfaces/create-forestry.interface';
import {XForestry} from '../../models/forestry.model';
import {IShowForestryDetails} from './interfaces/show-forestry-details.interface';
import {IShowForestryList} from './interfaces/show-forestry-list.interface';

export class ForestryPresenter implements ICreateForestArea, ICreateForestry, IShowForestryDetails, IShowForestryList {
  public forestryViews: IForestAreaViews & IForestryViews;
  public forestryService: ForestryService;

  constructor(forestryViews: IForestAreaViews & IForestryViews, forestryService: ForestryService) {
    this.forestryViews = forestryViews;
    this.forestryService = forestryService;
  }

  public onCreateForestAreaClicked(): void {
    this.forestryViews.showForestAreaCreationForm();
  }

  public onCreateForestAreaSave(forestArea: XForestArea): void {
    this.forestryViews.showForestAreaDetails(forestArea);
  }

  public onCreateForestrySave(forestry: XForestry): void {
    this.forestryService.createForestry(forestry).subscribe(() => {
      this.onForestryListClicked();
    }, () => {
        this.forestryViews.showForestryCreationFailureMessage();
    });
  }

  public onForestryDetailsClicked(id: number): void {
    this.forestryService.getForestry(id).subscribe((forestry: XForestry) =>
      this.forestryViews.showForestryDetails(forestry));
  }

  public onCreateForestryClicked(): void {
    this.forestryViews.showForestryCreationForm();
  }

  public onForestryListClicked(): void {
    this.forestryService.getForestries().subscribe((forestryList: XForestry[]) =>
    this.forestryViews.showForestryList(forestryList));
  }

}
