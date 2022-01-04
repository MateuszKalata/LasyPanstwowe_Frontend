import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {XForestAction} from 'src/app/models/forest-action.model';
import {environment} from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ForestActionService {
  private readonly AUTH_TOKEN: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';
  private FOREST_ACTION_API_URL: string = environment.apiUrl + '/forestaction';

  constructor(private httpClient: HttpClient) {

  }

  public createForestAction(array: XForestAction): Observable<any> {
    console.log(array);
    const data: any = {
      end_date: array.end_date,
      forest_area_id: array.forest_area_id,
      start_date: array.start_date,
      type: array.type,
      status: array.status,
      additional_info: array.additional_info,
      team_leader: array.team_leader,
      team_size: array.team_size,
      special_condition: array.special_condition,
      number_of_trees_to_proceed: array.number_of_trees_to_proceed,
      tree_type: array.tree_type,
    };
    return this.httpClient.post(environment.apiUrl + '/forestaction', data, {
      headers: new HttpHeaders().set(
        'Authorization',
        this.AUTH_TOKEN
      ),
    }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  public getForestActions(forestAreaId: number): Observable<XForestAction[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + `/forestactions`,
      {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)}).pipe(
      map((res: any[]) => {
        return res.filter((item) => item.forest_area_id == forestAreaId)
          .map((item) => ({
            ...item,
            forest_area_id: +item.forest_area_id,
          }));
      })
    );
  }


  public getForestAction(actionId: number): Observable<XForestAction> {
    return this.httpClient.get<XForestAction>(this.FOREST_ACTION_API_URL + `/${actionId}`, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
  }

  public updateForestAction(id: number): Observable<any> {
    return this.httpClient.patch(this.FOREST_ACTION_API_URL + `/${id}/finish`, {}, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
  }
}
