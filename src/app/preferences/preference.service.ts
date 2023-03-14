import { Subject } from "rxjs";
import { PreferenceTemplate } from "../shared/preferenceTemplate.model";

export class PreferenceService {
  preferenceTemplatesChanged = new Subject();
  private preferenceTemplates: PreferenceTemplate[] = [];

  getPreferenceTemplates() {
    return this.preferenceTemplates.slice();
  }

  getPreferenceTemplate(index: number) {
    return this.preferenceTemplates.slice()[index];
  }

  addPreferenceTemplate(preferenceTemplate: PreferenceTemplate) {
    this.preferenceTemplates.push(preferenceTemplate);
    this.preferenceTemplatesChanged.next();
  }

  updatePreferenceTemplate(index: number, preferenceTemplate: PreferenceTemplate) {
    this.preferenceTemplates[index] = preferenceTemplate;
    this.preferenceTemplatesChanged.next();
  }

  getPreferences() : PreferenceTemplate {
    if (this.preferenceTemplates.slice().length === 0)
      return new PreferenceTemplate('EmptyPreferenceTemplate');

    return this.preferenceTemplates.slice()[0];
  }

  deletePreferenceTemplate(index: number) {
    this.preferenceTemplates.splice(index, 1);
    this.preferenceTemplatesChanged.next();
  }
}
