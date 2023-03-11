import { Preference } from "./preference.model";

export class PreferenceTemplate {
  public name: string;
  public preferences: Preference[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
