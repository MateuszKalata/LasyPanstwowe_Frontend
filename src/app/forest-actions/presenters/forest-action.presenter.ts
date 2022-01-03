import { MatSnackBar } from "@angular/material/snack-bar";
import { AppInjector } from "src/app/app.module";
import { XForestAction } from "src/app/models/forest-action.model";
import { ForestActionService } from "../services/forest-action.service";
import { IForestActionViews } from "../views/interfaces/forest-action-views.interface";
import { ICreateForestAction } from "./interfaces/create-forest-action.interface";
import { IMarkForestActionAsDone } from "./interfaces/mark-forest-action-as-done.interface";
import { IShowForestActionDetails } from "./interfaces/show-forest-action-details.interface";
import { IShowForestActionList } from "./interfaces/show-forest-action-list.interface";

export class ForestActionPresenter implements IShowForestActionList, IShowForestActionDetails, IMarkForestActionAsDone, ICreateForestAction {
    public forestActionViews: IForestActionViews;
    public forestActionService: ForestActionService;
    public snackbar: MatSnackBar;

    constructor(forestActionViews: IForestActionViews) {
        this.forestActionViews = forestActionViews;
        this.forestActionService = AppInjector.get(ForestActionService);
        this.snackbar = AppInjector.get(MatSnackBar);
    }
    
    public onCreateForestActionClicked(): void {
        throw new Error("Method not implemented.");
    }
    public onShowForestActionListClicked(id: number): void {
        this.forestActionService.getForestActions(id).subscribe((data) => {
            this.forestActionViews.showForestActionList(data);
        });
    }
    public onShowForestActionDetailsClicked(id: number): void {
        throw new Error("Method not implemented.");
    }
    public onMarkAsDoneClicked(id: number): void {
        throw new Error("Method not implemented.");
    }
    public onForestActionSave(action: XForestAction): void {
        throw new Error("Method not implemented.");
    }
    
}