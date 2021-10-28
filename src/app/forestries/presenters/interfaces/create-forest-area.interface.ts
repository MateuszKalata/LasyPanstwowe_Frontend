import {XForestArea} from '../../../models/forest-area.model';

export interface ICreateForestArea {
  onCreateForestAreaClicked(): void;
  onCreateForestAreaSave(forestArea: XForestArea): void;
}
