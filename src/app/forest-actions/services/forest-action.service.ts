import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import { XForestAction } from 'src/app/models/forest-action.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class ForestActionService {
    private readonly AUTH_TOKEN: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';
    private FOREST_ACTION_API_URL: string = environment.apiUrl2 + '/forestaction';

    constructor(private httpClient: HttpClient) {

    }

    public createForestAction(data: XForestAction): any {// Observable<number> {

    }

    public getForestAction(actionId: number): Observable<XForestAction> {
      return this.httpClient.get<XForestAction>(this.FOREST_ACTION_API_URL + `/${actionId}`, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
    }

    public getForestActions(forestryId: number): Observable<XForestAction[]> {
        return this.httpClient.get<XForestAction[]>(this.FOREST_ACTION_API_URL + 's', {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
    }

    public updateForestAction(id: number): Observable<any> {
      return this.httpClient.patch(this.FOREST_ACTION_API_URL + `/${id}/finish`, {}, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
    }
}
