import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApartmentAttribute } from '../../../shared/apartmentAttribute.model';

@Component({
  selector: 'app-preference-edit',
  templateUrl: './preference-edit.component.html',
  styleUrls: ['./preference-edit.component.css']
})
export class PreferenceEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('scoreInput') scoreInputRef!: ElementRef;
  @Output() apartmentAttributeAdded = new EventEmitter<ApartmentAttribute>();

  onAddApartmentAttribute() {
    const attributeName = this.nameInputRef.nativeElement.value;
    const attributeScore = this.scoreInputRef.nativeElement.value;
    const newapartmentAttribute = new ApartmentAttribute(attributeName, attributeScore);
    this.apartmentAttributeAdded.emit(newapartmentAttribute);
  }
}
