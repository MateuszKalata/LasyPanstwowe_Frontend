import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForestryListComponent} from './forestries/views/forestry-list/forestry-list.component';
import {ForestryDetailsComponent} from './forestries/views/forestry-details/forestry-details.component';
import {SensorListComponent} from './sensors/views/sensor-list/sensor-list.component';
import {EmergencyListComponent} from './emergencies/views/emergency-list/emergency-list.component';
import {EmergencyDetailsComponent} from './emergencies/views/emergency-details/emergency-details.component';

const routes: Routes = [
  {path: 'forestries', component: ForestryListComponent},
  {path: 'forestries/:id', component: ForestryDetailsComponent},
  {path: 'emergencies', component: EmergencyListComponent},
  {path: 'emergencies/:id', component: EmergencyDetailsComponent},
  {path: 'sensors', component: SensorListComponent},
  {path: 'sensors/:id', component: SensorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
