import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForestryListComponent} from './forestries/views/forestry-list/forestry-list.component';
import {ForestryDetailsComponent} from './forestries/views/forestry-details/forestry-details.component';

const routes: Routes = [
  {path: 'forestries', component: ForestryListComponent},
  {path: 'forestries/:id', component: ForestryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
