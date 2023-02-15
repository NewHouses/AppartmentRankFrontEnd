import { Component } from '@angular/core';
import { Apartment } from './apartment.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  selectedApartment!: Apartment;
}
