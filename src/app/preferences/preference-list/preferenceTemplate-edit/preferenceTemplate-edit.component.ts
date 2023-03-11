import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Preference } from '../../../shared/preference.model';
import { PreferenceTemplate } from '../../../shared/preferenceTemplate.model';
import { PreferenceService } from '../../preference.service';

@Component({
  selector: 'app-preferenceTemplate-edit',
  templateUrl: './preferenceTemplate-edit.component.html',
  styleUrls: ['./preferenceTemplate-edit.component.css']
})
export class PreferenceTemplateEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) preferencesForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedPreferenceIndex: number;
  editedPreference: Preference;

  constructor(private preferenceService: PreferenceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.preferenceService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedPreferenceIndex = index;
          this.editMode = true;
          this.editedPreference = this.preferenceService.getPreference(index);
          this.preferencesForm.setValue({
            name: this.editedPreference.name,
            score: this.editedPreference.score
          });
        }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPreferenceTemplate = new PreferenceTemplate(value.name);
    newPreferenceTemplate.preferences.push(...[new Preference("price", value.price)])
    this.preferenceService.addPreferenceTemplate(newPreferenceTemplate);
    this.router.navigate(['../'], { relativeTo: this.route });
    //if (this.editMode) {
    //  this.preferenceService.updatePreference(this.editedPreferenceIndex, newPreference);
    //}
    //else {
    //  this.preferenceService.addPreferenceTemplate(newPreferenceTemplate);
    //}
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.preferencesForm.reset();
  }

  onDelete() {
    this.preferenceService.deletePreference(this.editedPreferenceIndex);
    this.onClear();
  }
}
