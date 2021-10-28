import {XForestArea} from '../../../models/forest-area.model';

export interface IForestAreaViews {
  showForestAreaCreationForm(): void;
  showForestAreaCreationFailureMessage(): void;
  showForestAreaDetails(forestArea: XForestArea): void;
}
