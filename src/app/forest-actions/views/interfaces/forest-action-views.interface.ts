import { XForestAction } from "src/app/models/forest-action.model";

export interface IForestActionViews {
    showForestActionCreateFailureMessage(): void;
    showForestActionCreationForm(): void;
    showForestActionList(data: XForestAction[]): void;
}