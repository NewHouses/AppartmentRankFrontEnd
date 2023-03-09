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

  getPreference(index: number) {
    return this.preferences.slice()[index];
  }

  addPreference(preference: Preference) {
    this.preferences.push(preference);
    this.preferencesChanged.next();
  }

  addPreferences(preferences: Preference[]) {
    this.preferences.push(...preferences);
    this.preferencesChanged.next()
  }

  updatePreference(index: number, newPreference: Preference) {
    this.preferences[index] = newPreference;
    this.preferencesChanged.next();
  }

  deletePreference(index: number) {
    this.preferences.splice(index, 1);
    this.preferencesChanged.next();
  }
}
