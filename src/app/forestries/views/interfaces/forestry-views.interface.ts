import {XForestry} from '../../../models/forestry.model';

export interface IForestryViews {
  showForestryCreationFailureMessage(): void;
  showForestryCreationForm(): void;
  showForestryList(forestryList: XForestry[]): void;
}
