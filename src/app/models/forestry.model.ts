import {XForestArea} from "./forest-area.model";

export interface XForestry {
  id: number;
  name: string;
  surface: number;
  typesOfForestation: string[];
  forestryAreas?: XForestArea[];
}
