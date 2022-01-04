import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { trDate } from 'src/app/helpers/trDate';
import { XForestAction } from 'src/app/models/forest-action.model';
import { environment } from '../../../environments/environment';

const mockedForestActionList = (id: number): XForestAction[] => [
  {
    id: 1,
    type: 'zalesienie',
    status: 'wykonane',
    startDate: trDate(new Date(0).toISOString(), 'DD.mm.YYYY HH:MM'),
    endDate: trDate(new Date().toISOString(), 'DD.mm.YYYY HH:MM'),
    forestAreaId: id,
  },
  {
    id: 2,
    type: 'wycinka',
    status: 'zaplanowane',
    startDate: trDate(new Date(0).toISOString(), 'DD.mm.YYYY HH:MM'),
    endDate: trDate(new Date().toISOString(), 'DD.mm.YYYY HH:MM'),
    forestAreaId: id,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ForestActionService {
  private readonly AUTH_TOKEN_HARDCODED: string =
    'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

  constructor(private httpClient: HttpClient) {}

  public createForestAction(array: XForestAction): Observable<any> {
      console.log(array)
    const data: any = {
      end_date: array.endDate,
      forest_area_id: array.forestAreaId,
      start_date: array.startDate,
      type: array.type,
      status: array.status,
      additional_info: array.additionalInfo,
      team_leader: array.teamLeader,
      team_size: array.teamSize,
      special_condition: array.special_condition,
      number_of_trees_to_proceed: array.numberOfTreesToProceed,
      tree_type: array.treeType,
    };
    return this.httpClient.post(environment.apiUrl + '/forestaction', data, {
      headers: new HttpHeaders().set(
        'Authorization',
        this.AUTH_TOKEN_HARDCODED
      ),
    }).pipe(
        catchError( (error) => {
            return throwError(error)
        })
      );;
  }

  public getForestAction(actionId: number): any {
    //Observable<XForestAction> {
  }

  public getForestActions(forestryId: number): any {
    //Observable<XForestAction[]> {
    return mockedForestActionList(forestryId);
  }

  public updateForestAction(action: XForestAction): any {
    //Observable<number> {
  }
  
//   private handleError(error: HttpErrorResponse) {
//     if (error.status === 0) {
      
//       console.error();
//     } else {
//     //   console.error(error.error);
//     }
//     return throwError(
//       'Coś poszło nie tak!');
//   }
}
