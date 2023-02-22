import { EventEmitter } from "@angular/core";
import { ApartmentAttribute } from "../shared/apartmentAttribute.model";

export class PreferenceService {
  preferencesChanged = new EventEmitter();
  private preferences: ApartmentAttribute[] = [
    new ApartmentAttribute('Terraza', 2),
    new ApartmentAttribute('Dúas habitacións', 3),
  ]

  getPreferences() {
    return this.preferences.slice();
  }

  addApartmentAttribute(apartmentAttribute: ApartmentAttribute) {
    this.preferences.push(apartmentAttribute);
    this.preferencesChanged.emit(this.preferences.slice());
  }

  addApartmentAttributes(apartmentAttributes: ApartmentAttribute[]) {
    this.preferences.push(...apartmentAttributes);
    this.preferencesChanged.emit()
  }
}
