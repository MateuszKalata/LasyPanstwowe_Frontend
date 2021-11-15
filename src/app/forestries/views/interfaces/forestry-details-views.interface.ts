import {XForestArea} from '../../../models/forest-area.model';
import {XForestry} from '../../../models/forestry.model';

export interface IForestryDetailsViews {
  showForestAreaCreationForm(): void;
  showForestAreaCreationFailureMessage(): void;
  showForestAreaDetails(forestArea: XForestArea): void;
  showForestryDetails(forestryDetails: XForestry): void;
}
