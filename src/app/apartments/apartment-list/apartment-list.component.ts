import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  apartments: Apartment[];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.apartments = this.apartmentService.getApartments();
  }
}
