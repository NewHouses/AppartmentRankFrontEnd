import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Preference } from '../../shared/preference.model';
import { PreferenceTemplate } from '../../shared/preferenceTemplate.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preferenceTemplate-edit',
  templateUrl: './preferenceTemplate-edit.component.html',
  styleUrls: ['./preferenceTemplate-edit.component.css']
})
export class PreferenceTemplateEditComponent implements OnInit, OnDestroy {
  preferencesForm: FormGroup;
  editSubscription: Subscription;
  editMode = false;
  editedPreferenceTemplateIndex: number;
  editedPreferenceTemplate: PreferenceTemplate;

  constructor(private preferenceService: PreferenceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: {
            lat: 42.2191814,
            lng: -8.74549713
        }
      }
    );

    this.editSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.editedPreferenceTemplateIndex = +params['preferenceTemplateId'];
        this.editedPreferenceTemplate = this.preferenceService.getPreferenceTemplate(this.editedPreferenceTemplateIndex);
        this.editMode = params['preferenceTemplateId'] != null;
        this.initForm()
   }
    );
  }

  private initForm() {
    let preferenceTemplateName = '';
    let preferenceTemplatePrice;
    let preferenceTemplateSize;

    if (this.editMode) {
      this.editedPreferenceTemplate = this.preferenceService.getPreferenceTemplate(this.editedPreferenceTemplateIndex);
      preferenceTemplateName = this.editedPreferenceTemplate.name;
      preferenceTemplatePrice = this.editedPreferenceTemplate.preferences.find(p => p.name === "price")?.score;
      if (preferenceTemplatePrice === null)
        preferenceTemplatePrice = 0;
      preferenceTemplateSize = this.editedPreferenceTemplate.preferences.find(p => p.name === "size")?.score;
      if (preferenceTemplateSize === null)
        preferenceTemplateSize = 0;
    }

    this.preferencesForm = new FormGroup({
      'name': new FormControl(preferenceTemplateName, Validators.required),
      'price': new FormControl(preferenceTemplatePrice, Validators.required),
      'size': new FormControl(preferenceTemplateSize, Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onSubmit() {
    const value = this.preferencesForm.value;
    const newPreferenceTemplate = new PreferenceTemplate(value.name);

    newPreferenceTemplate.preferences.push(...[
      new Preference("price", value.price),
      new Preference("size", value.size)])

    this.router.navigate(['../'], { relativeTo: this.route });
    if (this.editMode) {
      this.preferenceService.updatePreferenceTemplate(this.editedPreferenceTemplateIndex, newPreferenceTemplate);
    }
    else {
      this.preferenceService.addPreferenceTemplate(newPreferenceTemplate);
    }
    this.onClear();
    this.editMode = false;
  }

  onClear() {
    this.preferencesForm.reset();
  }

  onDelete() {
    this.preferenceService.deletePreferenceTemplate(this.editedPreferenceTemplateIndex);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
