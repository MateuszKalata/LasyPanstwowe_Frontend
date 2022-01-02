import { XForestAction } from "src/app/models/forest-action.model";

export interface IForestActionDetailsView {
    showForestActionDetails(action: XForestAction): void;
}