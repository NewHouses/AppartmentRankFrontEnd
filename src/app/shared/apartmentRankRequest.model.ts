import { Filter } from "../apartments/filter/Filter.model";
import { Preference } from "./preference.model";

export class ApartmentRankRequest {
  public filter: Filter;

  public preferences: Preference[]

  constructor(filter: Filter, preferences: Preference[]) {
    this.filter = filter;
    this.preferences = preferences;
  }
}
