import {XForestry} from "../../../models/forestry.model";

export interface IForestryViews {
  showForestryCreationFailureMessage(): void;
  showForestryCreationForm(): void;
  showForestryDetails(forestryDetails: XForestry): void;
  showForestryList(forestryList: XForestry[]): void;
}
