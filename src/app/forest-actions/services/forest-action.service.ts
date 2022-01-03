import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { trDate } from "src/app/helpers/trDate";
import { XForestAction } from "src/app/models/forest-action.model";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';

const mockedForestActionList = (id: number): XForestAction[] => ([
    {
        id: 1,
        type: 'zalesienie',
        status: "wykonane",
        startDate: trDate((new Date(0)).toISOString(), 'DD.mm.YYYY HH:MM'),
        endDate: trDate((new Date()).toISOString(), 'DD.mm.YYYY HH:MM'),
        forestAreaId: id
    },
    {
        id: 2,
        type: 'wycinka',
        status: 'zaplanowane',
        startDate: trDate((new Date(0)).toISOString(), 'DD.mm.YYYY HH:MM'),
        endDate: trDate((new Date()).toISOString(), 'DD.mm.YYYY HH:MM'),
        forestAreaId: id
    }
])

@Injectable({
    providedIn: 'root'
})

export class ForestActionService {
    private readonly AUTH_TOKEN_HARDCODED: string = 'Basic YXBpOm5pZXNhbW93aWNpZXNrb21wbGlrb3dhbmVoYXNsbw==';

    constructor(private httpClient: HttpClient) {
        
    }

    public createForestAction(data: XForestAction): any {//Observable<number> {
        
    }

    public getForestAction(actionId: number): any {//Observable<XForestAction> {

    }

    public getForestActions(forestAreaId: number): Observable<XForestAction[]> {
        // return mockedForestActionList(forestAreaId);
        console.log("qwe")
        return this.httpClient.get<any[]>(environment.apiUrl + `/forestactions`,
            {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN_HARDCODED)}).pipe(
                map((res: any[]) => {
                    const actualRes = res.filter((item) => item.forest_area_id == forestAreaId);
                    return actualRes.map((item) => ({
                        ...item,
                        startDate: trDate(item.start_date, "DD.mm.YYYY HH:MM"),
                        endDate: trDate(item.end_date, "DD.mm.YYYY HH:MM"),
                        forestAreaId: parseInt(item.forest_area_id),
                        additionalInfo: item.additional_info,
                        numberOfTreesToProceed: item.number_of_trees_to_proceed,
                        teamLeader: item.team_leader,
                        teamSize: item.team_size,
                        type: item.type === 'forestation' ? 'zalesienie' : 'wycinka',
                        status: item.status === 'active' ? 'zaplanowane' : 'wykonane'
                    }))
                })
            )
    }

    public updateForestAction(action: XForestAction): any {//Observable<number> {

    }
}