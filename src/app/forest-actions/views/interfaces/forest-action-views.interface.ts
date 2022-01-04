import { XForestAction } from "src/app/models/forest-action.model";

export interface IForestActionViews {
    showForestActionCreateFailureMessage(data: string): void;
    showForestActionCreateMessage(): void;
    showForestActionCreationForm(): void;
    showForestActionList(data: XForestAction[]): void;
}