import { Subject } from "rxjs";
import { Preference } from "../shared/preference.model";

export class PreferenceService {
  preferencesChanged = new Subject();
  startedEditing = new Subject<number>();
  private preferences: Preference[] = [
    new Preference('Terraza', 2),
    new Preference('Dúas habitacións', 3),
  ]

  getPreferences() {
    return this.preferences.slice();
  }

  getApartmentAttributePreference(index: number) {
    return this.preferences.slice()[index];
  }

  addApartmentAttribute(apartmentAttribute: Preference) {
    this.preferences.push(apartmentAttribute);
    this.preferencesChanged.next();
  }

  addApartmentAttributes(apartmentAttributes: Preference[]) {
    this.preferences.push(...apartmentAttributes);
    this.preferencesChanged.next()
  }

  updateApartmentAttribute(index: number, newApartmentAttribute: Preference) {
    this.preferences[index] = newApartmentAttribute;
    this.preferencesChanged.next();
  }

  deleteApartmentAttribute(index: number) {
    this.preferences.splice(index, 1);
    this.preferencesChanged.next();
  }
}
