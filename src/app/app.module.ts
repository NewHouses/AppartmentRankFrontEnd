import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list/preference-list.component';
import { PreferenceEditComponent } from './preferences/preference-list/preference-edit/preference-edit.component';
import { ApartmentItemComponent } from './apartments/apartment-list/apartment-item/apartment-item.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { FilterComponent } from './apartments/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreferencesComponent,
    PreferenceListComponent,
    PreferenceEditComponent,
    ApartmentsComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    FilterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
