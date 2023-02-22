import { Component, OnInit } from '@angular/core';
import { Apartment } from './apartment.model';
import { ApartmentService } from './apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: [ApartmentService]
})
export class ApartmentsComponent implements OnInit {
  selectedApartment!: Apartment;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.apartmentService.apartmentSelected.subscribe(
      (apartment: Apartment) => {
        this.selectedApartment = apartment;
      }
    );
  }
}
