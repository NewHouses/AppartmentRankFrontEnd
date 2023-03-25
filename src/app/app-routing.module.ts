import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentDetailComponent } from "./apartments/apartment-detail/apartment-detail.component";
import { ApartmentEditComponent } from "./apartments/apartment-edit/apartment-edit.component";
import { ApartmentsComponent } from "./apartments/apartments.component";
import { PreferenceTemplateEditComponent } from "./preferences/preferenceTemplate-edit/preferenceTemplate-edit.component";
import { PreferencesComponent } from "./preferences/preferences.component";
import { AuthComponent } from "./auth/auth.component";
import { NewUserComponent } from "./auth/new-user/new-user.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/apartments', pathMatch: 'full' },
  {
    path: 'apartments', component: ApartmentsComponent, children: [
      { path: 'new', component: ApartmentEditComponent },
      { path: ':apartmentId', component: ApartmentDetailComponent },
      { path: ':apartmentId/edit', component: ApartmentEditComponent }
    ]
  },
  {
    path: 'preferences', component: PreferencesComponent, children: [
      { path: 'new', component: PreferenceTemplateEditComponent },
      { path: ':preferenceTemplateId', component: PreferenceTemplateEditComponent }
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'new-user', component: NewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
