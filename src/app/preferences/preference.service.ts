import { Subject } from "rxjs";
import { ApartmentAttribute } from "../shared/apartmentAttribute.model";

export class PreferenceService {
  preferencesChanged = new Subject();
  startedEditing = new Subject<number>();
  private preferences: ApartmentAttribute[] = [
    new ApartmentAttribute('Terraza', 2),
    new ApartmentAttribute('Dúas habitacións', 3),
  ]

  getPreferences() {
    return this.preferences.slice();
  }

  getApartmentAttributePreference(index: number) {
    return this.preferences.slice()[index];
  }

  addApartmentAttribute(apartmentAttribute: ApartmentAttribute) {
    this.preferences.push(apartmentAttribute);
    this.preferencesChanged.next(this.preferences.slice());
  }

  addApartmentAttributes(apartmentAttributes: ApartmentAttribute[]) {
    this.preferences.push(...apartmentAttributes);
    this.preferencesChanged.next()
  }

  updateApartmentAttribute(index: number, newApartmentAttribute: ApartmentAttribute) {
    this.preferences[index] = newApartmentAttribute;
    this.preferencesChanged.next(this.preferences.slice());
  }
}
