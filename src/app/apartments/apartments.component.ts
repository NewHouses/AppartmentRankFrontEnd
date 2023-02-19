import { Component } from '@angular/core';
import { Apartment } from './apartment.model';
import { ApartmentService } from './apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: [ApartmentService]
})
export class ApartmentsComponent {
  selectedApartment!: Apartment;
}
