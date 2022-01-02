import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { XForestAction } from "src/app/models/forest-action.model";

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

    public getForestActions(forestryId: number): any {//Observable<XForestAction[]> {

    }

    public updateForestAction(action: XForestAction): any {//Observable<number> {

    }
}