import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Preference } from '../../../shared/preference.model';
import { PreferenceService } from '../../preference.service';

@Component({
  selector: 'app-preference-edit',
  templateUrl: './preference-edit.component.html',
  styleUrls: ['./preference-edit.component.css']
})
export class PreferenceEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) preferencesForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedPreferenceIndex: number;
  editedPreference: Preference;

  constructor(private preferenceService: PreferenceService) { }

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
    const newPreference = new Preference(value.name, value.score);
    if (this.editMode) {
      this.preferenceService.updatePreference(this.editedPreferenceIndex, newPreference);
    }
    else {
      this.preferenceService.addPreference(newPreference);
    }
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
