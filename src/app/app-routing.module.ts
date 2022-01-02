import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForestryListComponent} from './forestries/views/forestry-list/forestry-list.component';
import {ForestryDetailsComponent} from './forestries/views/forestry-details/forestry-details.component';
import {SensorListComponent} from './sensors/views/sensor-list/sensor-list.component';
import {EmergencyListComponent} from './emergencies/views/emergency-list/emergency-list.component';
import {EmergencyDetailsComponent} from './emergencies/views/emergency-details/emergency-details.component';
import { ForestActionListComponent } from './forest-actions/views/forest-action-list/forest-action-list.component';

const routes: Routes = [
  {path: 'forestries', component: ForestryListComponent},
  {path: 'forestries/:id', component: ForestryDetailsComponent},
  {path: 'emergencies', component: EmergencyListComponent},
  {path: 'emergencies/:id', component: EmergencyDetailsComponent},
  {path: 'sensors', component: SensorListComponent},
  {path: 'sensors/:id', component: SensorListComponent},
  {path: 'forestries/:id/actions', component: ForestActionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
