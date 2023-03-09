import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Preference } from '../../../shared/apartmentAttribute.model';
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
  editedApartmentAttributeIndex: number;
  editedApartmentAttribute: Preference;

  constructor(private preferenceService: PreferenceService) { }

  ngOnInit(): void {
    this.subscription = this.preferenceService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedApartmentAttributeIndex = index;
          this.editMode = true;
          this.editedApartmentAttribute = this.preferenceService.getApartmentAttributePreference(index);
          this.preferencesForm.setValue({
            name: this.editedApartmentAttribute.name,
            score: this.editedApartmentAttribute.score
          });
        }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newApartmentAttribute = new Preference(value.name, value.score);
    if (this.editMode) {
      this.preferenceService.updateApartmentAttribute(this.editedApartmentAttributeIndex, newApartmentAttribute);
    }
    else {
      this.preferenceService.addApartmentAttribute(newApartmentAttribute);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.preferencesForm.reset();
  }

  onDelete() {
    this.preferenceService.deleteApartmentAttribute(this.editedApartmentAttributeIndex);
    this.onClear();
  }
}
