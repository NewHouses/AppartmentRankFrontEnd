import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentsComponent } from "./apartments/apartments.component";
import { PreferencesComponent } from "./preferences/preferences.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/apartments', pathMatch: 'full' },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'preferences', component: PreferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
