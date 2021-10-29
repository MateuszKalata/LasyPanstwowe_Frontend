
import {Observable, of} from "rxjs";
import {XForestry} from "../../models/forestry.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ForestryService {

  constructor() { }

  getForestries(): Observable<XForestry[]> {
    return of ([
      {id: 1, name: 'Leśnictwo 1', typesOfForestation: [], surface: 30},
      {id: 2, name: 'Leśnictwo 2', typesOfForestation: [], surface: 40},
      {id: 1, name: 'Leśnictwo 3', typesOfForestation: [], surface: 50}
    ])
  }

  getForestry(id: number): Observable<XForestry> {
    return of(
      {id: 1, name: 'Leśnictwo 1', typesOfForestation: [], surface: 30}
    )
  }

  createForestry(forestry: XForestry): Observable<void> {
    return of();
  }
}
