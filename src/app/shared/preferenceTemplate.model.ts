import { Preference } from "./preference.model";
import { PreferenceArea } from "./preferenceArea.model";

export class PreferenceTemplate {
  public name: string;
  public preferences: Preference[] = [];
  public preferenceAreas: PreferenceArea[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
