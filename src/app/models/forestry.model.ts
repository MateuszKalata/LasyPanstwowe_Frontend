import {XForestArea} from "./forest-area.model";
import {ForestationTypeEnum} from "../enums/forestation-type.enum";

export interface XForestry {
  id?: number;
  name: string;
  surface: number;
  typesOfForestation: ForestationTypeEnum;
  forestryAreas?: XForestArea[];
}
