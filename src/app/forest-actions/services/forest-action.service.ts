import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import { trDate } from 'src/app/helpers/trDate';
import { XForestAction } from 'src/app/models/forest-action.model';

const mockedForestActionList = (id: number): XForestAction[] => ([
    {
        id: 1,
        type: 'zalesienie',
        status: 'wykonane',
        startDate: trDate((new Date(0)).toISOString(), 'DD.mm.YYYY HH:MM'),
        endDate: trDate((new Date()).toISOString(), 'DD.mm.YYYY HH:MM'),
        forestAreaId: id,
        teamLeader: 'Leśniczy',
        teamSize: 3,
        numberOfTreesToProceed: 2,
        treeType: 'Buk',
    },
    {
        id: 2,
        type: 'wycinka',
        status: 'zaplanowane',
        startDate: trDate((new Date(0)).toISOString(), 'DD.mm.YYYY HH:MM'),
        endDate: trDate((new Date()).toISOString(), 'DD.mm.YYYY HH:MM'),
        forestAreaId: id,
    },
]);

@Injectable({
    providedIn: 'root',
})

export class ForestActionService {
    private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

    constructor(private httpClient: HttpClient) {

    }

    public createForestAction(data: XForestAction): any {// Observable<number> {

    }

    public getForestAction(actionId: number): XForestAction {// Observable<XForestAction> {
      return mockedForestActionList(1)[0];
    }

    public getForestActions(forestryId: number): any {// Observable<XForestAction[]> {
        return mockedForestActionList(forestryId);
    }

    public updateForestAction(id: number): Observable<any> {
      return of({});
    }
}
