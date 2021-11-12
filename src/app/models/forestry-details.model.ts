import {XForestArea} from './forest-area.model';

export interface XForestryDetails {
  id?: number;
  name: string;
  surface: number;
  forestAreas?: XForestArea[];
}
