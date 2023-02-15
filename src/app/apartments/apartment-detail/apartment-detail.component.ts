import { Component, Input } from '@angular/core';
import { Apartment } from '../apartment.model';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent {
  @Input('apartmentDetail') apartment!: Apartment;
}
