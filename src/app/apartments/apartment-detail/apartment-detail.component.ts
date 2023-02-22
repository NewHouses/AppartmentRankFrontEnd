import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
   apartment: Apartment;
   apartmentId: number;

  constructor(private apartmentService: ApartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.apartmentId = +params['apartmentId'];
        this.apartment = this.apartmentService.getApartment(this.apartmentId);
      }
    );
  }

  onAddToPrefereceList() {
    this.apartmentService.addApartmentAttributesToPreferenceList(this.apartment.apartmentAttributes);
  }

  onEditApartment() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
