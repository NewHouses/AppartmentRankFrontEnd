import { Filter } from "../apartments/filter/Filter.model";
import { PreferenceTemplate } from "./preferenceTemplate.model";

export class ApartmentRankRequest {
  public filter: Filter;

  public preferenceTemplate: PreferenceTemplate

  constructor(filter: Filter, preferenceTemplate: PreferenceTemplate) {
    this.filter = filter;
    this.preferenceTemplate = preferenceTemplate;
  }
}
