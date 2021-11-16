import {NgModule, Injector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TabComponent} from './components/tab/tab.component';
import {TabHeaderComponent} from './components/tab/tab-header/tab-header.component';
import {TabContentComponent} from './components/tab/tab-content/tab-content.component';
import {ForestAreaCreationFormComponent} from './forestries/views/forest-area-creation-form/forest-area-creation-form.component';
import {ForestryListComponent} from './forestries/views/forestry-list/forestry-list.component';
import {MessageDialogComponent} from './components/message-dialog/message-dialog.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {DialogHeaderComponent} from './components/dialog/dialog-header/dialog-header.component';
import {DialogContentComponent} from './components/dialog/dialog-content/dialog-content.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ForestryDetailsComponent } from './forestries/views/forestry-details/forestry-details.component';
import { ForestryCreationFormComponent } from './forestries/views/forestry-creation-form/forestry-creation-form.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}
export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TabComponent,
    TabHeaderComponent,
    TabContentComponent,
    ForestAreaCreationFormComponent,
    ForestryListComponent,
    MessageDialogComponent,
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    TestComponentComponent,
    ForestryDetailsComponent,
    ForestryCreationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatSortModule,
    MatDividerModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageDialogComponent,
    ForestAreaCreationFormComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
