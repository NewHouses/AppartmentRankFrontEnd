import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Apartment } from "./apartment.model";

@Injectable()
export class ApartmentService {
  apartmentsChanged = new Subject();

  private apartments: Apartment[] = [];

  constructor() { }

  setApartments(apartments: Apartment[]) {
    this.apartments = apartments.sort((a1, a2) => a1.score - a2.score).reverse();
    this.apartmentsChanged.next(this.apartments.slice());
  }

  getApartments() {
    return this.apartments.slice();
  }

  getApartment(index: number) {
    return this.apartments.slice()[index];
  }

  addApartment(apartment: Apartment) {
    this.apartments.push(apartment);
    this.apartmentsChanged.next();
  }

  updateApartment(index: number, apartment: Apartment) {
    this.apartments[index] = apartment;
    this.apartmentsChanged.next();
  }

  deleteApartment(index: number) {
    this.apartments.splice(index, 1);
    this.apartmentsChanged.next();
  }
}
