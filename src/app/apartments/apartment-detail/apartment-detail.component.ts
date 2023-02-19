import { Component, Input } from '@angular/core';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent {
  @Input('apartmentDetail') apartment!: Apartment;

  constructor(private apartmentService: ApartmentService) { }

  onAddToPrefereceList() {
    this.apartmentService.addApartmentAttributesToPreferenceList(this.apartment.apartmentAttributes);
  }
}
