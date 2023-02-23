import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
   apartment: Apartment;
   apartmentId: number;

  constructor(private apartmentService: ApartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.apartmentId = +params['apartmentId'];
        this.apartment = this.apartmentService.getApartment(this.apartmentId);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToPrefereceList() {
    this.apartmentService.addApartmentAttributesToPreferenceList(this.apartment.apartmentAttributes);
  }

  onEditApartment() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
