import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list/preference-list.component';
import { PreferenceEditComponent } from './preferences/preference-list/preference-edit/preference-edit.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { ApartmentItemComponent } from './apartments/apartment-list/apartment-item/apartment-item.component';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { FilterComponent } from './apartments/filter/filter.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PreferenceService } from './preferences/preference.service';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreferencesComponent,
    PreferenceListComponent,
    PreferenceEditComponent,
    ApartmentsComponent,
    ApartmentListComponent,
    ApartmentDetailComponent,
    ApartmentItemComponent,
    FilterComponent,
    DropdownDirective,
    ApartmentEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
