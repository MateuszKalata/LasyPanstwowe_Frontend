import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { trDate } from "src/app/helpers/trDate";
import { XForestAction } from "src/app/models/forest-action.model";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';

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

    public getForestActions(forestAreaId: number): Observable<XForestAction[]> {
        // return mockedForestActionList(forestAreaId);
        console.log("qwe")
        return this.httpClient.get<any[]>(environment.apiUrl + `/forestactions`,
            {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)}).pipe(
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


    public getForestAction(actionId: number): Observable<XForestAction> {
      return this.httpClient.get<XForestAction>(this.FOREST_ACTION_API_URL + `/${actionId}`, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
    }

    public updateForestAction(id: number): Observable<any> {
      return this.httpClient.patch(this.FOREST_ACTION_API_URL + `/${id}/finish`, {}, {headers: new HttpHeaders().set('Authorization', this.AUTH_TOKEN)});
    }
}
