import { Subject } from "rxjs";
import { ApartmentAttribute } from "../shared/apartmentAttribute.model";

export class PreferenceService {
  preferencesChanged = new Subject();
  private preferences: ApartmentAttribute[] = [
    new ApartmentAttribute('Terraza', 2),
    new ApartmentAttribute('Dúas habitacións', 3),
  ]

  getPreferences() {
    return this.preferences.slice();
  }

  addApartmentAttribute(apartmentAttribute: ApartmentAttribute) {
    this.preferences.push(apartmentAttribute);
    this.preferencesChanged.next(this.preferences.slice());
  }

  addApartmentAttributes(apartmentAttributes: ApartmentAttribute[]) {
    this.preferences.push(...apartmentAttributes);
    this.preferencesChanged.next()
  }
}
