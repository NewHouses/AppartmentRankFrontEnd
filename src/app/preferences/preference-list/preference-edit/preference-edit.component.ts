import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApartmentAttribute } from '../../../shared/apartmentAttribute.model';
import { PreferenceService } from '../../preference.service';

@Component({
  selector: 'app-preference-edit',
  templateUrl: './preference-edit.component.html',
  styleUrls: ['./preference-edit.component.css']
})
export class PreferenceEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('scoreInput') scoreInputRef!: ElementRef;

  constructor(private preferenceService: PreferenceService) { }

  onAddApartmentAttribute() {
    const attributeName = this.nameInputRef.nativeElement.value;
    const attributeScore = this.scoreInputRef.nativeElement.value;
    const newApartmentAttribute = new ApartmentAttribute(attributeName, attributeScore);
    this.preferenceService.addApartmentAttribute(newApartmentAttribute);
  }
}
