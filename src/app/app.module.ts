import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list/preference-list.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { ApartmentItemComponent } from './apartments/apartment-list/apartment-item/apartment-item.component';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { FilterComponent } from './apartments/filter/filter.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PreferenceService } from './preferences/preference.service';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';
import { ApartmentService } from './apartments/apartment.service';
import { DataStorageService } from './shared/data-storage.service';
import { PreferenceTemplateEditComponent } from './preferences/preferenceTemplate-edit/preferenceTemplate-edit.component';
import { PreferenceTemplateItemComponent } from './preferences/preference-list/preference-template-item/preference-template-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreferencesComponent,
    PreferenceListComponent,
    PreferenceTemplateEditComponent,
    ApartmentsComponent,
    ApartmentListComponent,
    ApartmentDetailComponent,
    ApartmentItemComponent,
    FilterComponent,
    DropdownDirective,
    ApartmentEditComponent,
    PreferenceTemplateItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  providers: [PreferenceService, ApartmentService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
