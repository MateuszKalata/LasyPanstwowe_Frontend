import {XForestry} from "../../../models/forestry.model";

export interface ICreateForestry {
  onCreateForestrySave(forestry: XForestry): void;
}
