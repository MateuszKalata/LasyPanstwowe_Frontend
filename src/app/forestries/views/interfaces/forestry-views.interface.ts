import {XForestry} from '../../../models/forestry.model';

export interface IForestryViews {
  showForestryCreationFailureMessage(): void;
  showForestryCreationSuccessMessage(): void;
  showForestryCreationForm(): void;
  showForestryList(forestryList: XForestry[]): void;
}
