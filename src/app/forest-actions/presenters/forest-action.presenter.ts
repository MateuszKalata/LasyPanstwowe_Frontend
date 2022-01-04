import { MatSnackBar } from '@angular/material/snack-bar';
import { AppInjector } from 'src/app/app.module';
import { XForestAction } from 'src/app/models/forest-action.model';
import { ForestActionService } from '../services/forest-action.service';
import { IForestActionViews } from '../views/interfaces/forest-action-views.interface';
import { ICreateForestAction } from './interfaces/create-forest-action.interface';
import { IMarkForestActionAsDone } from './interfaces/mark-forest-action-as-done.interface';
import { IShowForestActionDetails } from './interfaces/show-forest-action-details.interface';
import { IShowForestActionList } from './interfaces/show-forest-action-list.interface';
import {IForestActionDetailsView} from '../views/interfaces/forest-action-details-view.interface';

export class ForestActionPresenter implements IShowForestActionList, IShowForestActionDetails, IMarkForestActionAsDone, ICreateForestAction {
    public forestActionViews: IForestActionViews | undefined;
    public forestActionDetailsViews: IForestActionDetailsView | undefined;
    public forestryId: number | undefined;
    public forestActionService: ForestActionService;
    public snackbar: MatSnackBar;

    constructor(forestActionViews: IForestActionViews | undefined, forestActionDetailsViews: IForestActionDetailsView | undefined) {
        this.forestActionViews = forestActionViews;
        this.forestActionDetailsViews = forestActionDetailsViews;
        this.forestActionService = AppInjector.get(ForestActionService);
        this.snackbar = AppInjector.get(MatSnackBar);
    }

    public onCreateForestActionClicked(): void {
        this.forestActionViews?.showForestActionCreationForm();
      }
    public onShowForestActionListClicked(id: number): void {
        this.forestryId = id;
      this.forestActionService.getForestActions(id).subscribe((forestActions) => {
        this.forestActionViews?.showForestActionList(forestActions);
      });
    }
    public onShowForestActionDetailsClicked(id: number): void {
        this.forestActionService.getForestAction(id).subscribe((forestAction) => {
          this.forestActionDetailsViews?.showForestActionDetails(forestAction);
        });
    }
    public onMarkAsDoneClicked(id: number): void {
      this.forestActionService.updateForestAction(id).subscribe(() => {
        this.snackbar.open('Zarejestrowano wykonanie akcji leśnej', 'Ok', {duration: 3000});
        if (this.forestryId) {
          this.onShowForestActionListClicked(this.forestryId);
        }
      }, () => {
        this.snackbar.open('Błąd rejestrowania wykonania akcji leśnej', 'Ok', {duration: 3000});
      });
    }
    public onForestActionSave(action: XForestAction): void {

        this.forestActionService.createForestAction(action).subscribe(
          (data) => {
           this.forestActionViews?.showForestActionCreateMessage()
          },
          (error) => {
            console.log(error.error.message)
            this.forestActionViews?.showForestActionCreateFailureMessage(error.error.message);
          }
        );
      }
 }


