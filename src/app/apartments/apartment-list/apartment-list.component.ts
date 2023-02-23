import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit, OnDestroy {
  apartments: Apartment[];
  subscription: Subscription;

  constructor(private apartmentService: ApartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.apartmentService.apartmentsChanged.subscribe(
      () => {
        this.apartments = this.apartmentService.getApartments();
      }
    );
    this.apartments = this.apartmentService.getApartments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewApartment() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
