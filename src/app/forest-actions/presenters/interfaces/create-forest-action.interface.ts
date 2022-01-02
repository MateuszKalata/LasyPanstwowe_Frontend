import { XForestAction } from "src/app/models/forest-action.model";

export interface ICreateForestAction {
    onForestActionSave(action: XForestAction): void;
}