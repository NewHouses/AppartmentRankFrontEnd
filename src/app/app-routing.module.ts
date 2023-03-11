import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentDetailComponent } from "./apartments/apartment-detail/apartment-detail.component";
import { ApartmentEditComponent } from "./apartments/apartment-edit/apartment-edit.component";
import { ApartmentsComponent } from "./apartments/apartments.component";
import { PreferenceTemplateEditComponent } from "./preferences/preference-list/preferenceTemplate-edit/preferenceTemplate-edit.component";
import { PreferencesComponent } from "./preferences/preferences.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/apartments', pathMatch: 'full' },
  {
    path: 'apartments', component: ApartmentsComponent, children: [
      { path: 'new', component: ApartmentEditComponent },
      { path: ':apartmentId', component: ApartmentDetailComponent },
      { path: ':apartmentId/edit', component: ApartmentEditComponent }
    ] },
  {
    path: 'preferences', component: PreferencesComponent, children: [
      { path: 'new', component: PreferenceTemplateEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
