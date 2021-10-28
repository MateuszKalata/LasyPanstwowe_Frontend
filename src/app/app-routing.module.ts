import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForestryListComponent} from './forestries/views/forestry-list/forestry-list.component';

const routes: Routes = [
    {path: 'forestries', component: ForestryListComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
