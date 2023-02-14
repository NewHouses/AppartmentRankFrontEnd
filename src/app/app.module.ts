import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './exercises/server/server.component';
import { ServersComponent } from './exercises/servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list/preference-list.component';
import { PreferenceItemComponent } from './preferences/preference-list/preference-item/preference-item.component';
import { FilterComponent } from './appartments/filter/filter.component';
import { AppartmentListComponent } from './appartments/appartment-list/appartment-list.component';
import { AppartmentItemComponent } from './appartments/appartment-list/appartment-item/appartment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    AppartmentsComponent,
    PreferencesComponent,
    PreferenceListComponent,
    PreferenceItemComponent,
    FilterComponent,
    AppartmentListComponent,
    AppartmentItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
