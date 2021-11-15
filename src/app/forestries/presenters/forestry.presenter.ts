import {IForestryViews} from '../views/interfaces/forestry-views.interface';
import {ForestryService} from '../services/forestry.service';
import {ICreateForestry} from './interfaces/create-forestry.interface';
import {XForestry} from '../../models/forestry.model';
import {IShowForestryList} from './interfaces/show-forestry-list.interface';
import {AppInjector} from '../../app.module';

export class ForestryPresenter implements ICreateForestry, IShowForestryList {
  public forestryViews: IForestryViews;
  public forestryService: ForestryService;

  constructor(forestryViews: IForestryViews) {
    this.forestryViews = forestryViews;
    this.forestryService = AppInjector.get(ForestryService);
  }

  public onCreateForestrySave(forestry: XForestry): void {
    this.forestryService.createForestry(forestry).subscribe(() => {
      this.onForestryListClicked();
      this.forestryViews.showForestryCreationSuccessMessage();
    }, () => {
      this.forestryViews.showForestryCreationFailureMessage();
    });
  }

  public onCreateForestryClicked(): void {
    this.forestryViews.showForestryCreationForm();
  }

  public onForestryListClicked(): void {
    this.forestryService.getForestries().subscribe((forestryList: XForestry[]) =>
      this.forestryViews.showForestryList(forestryList));
  }

}
