import { Preference } from "./preference.model";
import { PreferenceArea } from "./preferenceArea.model";

export class PreferenceTemplate {
  public name: string;
  public preferences: Preference[] = [];
  public preferenceAreas: PreferenceArea[] = [];

  constructor(name: string) {
    this.name = name;
    this.preferences.push(...[
      new Preference("community_tax_included", 1),
      new Preference("electricity_costs_included", 1),
      new Preference("gas_costs_included", 1),
      new Preference("water_costs_included", 1)
    ]);
  }
}
