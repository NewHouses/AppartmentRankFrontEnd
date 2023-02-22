import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApartmentAttribute } from '../../../shared/apartmentAttribute.model';
import { PreferenceService } from '../../preference.service';

@Component({
  selector: 'app-preference-edit',
  templateUrl: './preference-edit.component.html',
  styleUrls: ['./preference-edit.component.css']
})
export class PreferenceEditComponent {

  constructor(private preferenceService: PreferenceService) { }

  onAddApartmentAttribute(form: NgForm) {
    const value = form.value;
    const newApartmentAttribute = new ApartmentAttribute(value.name, value.score);
    this.preferenceService.addApartmentAttribute(newApartmentAttribute);
  }
}
