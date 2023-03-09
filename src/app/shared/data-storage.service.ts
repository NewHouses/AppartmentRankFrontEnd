import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApartmentService } from "../apartments/apartment.service";

@Injectable()
export class DataStorageService {
  private apartmentRankRequest: string = "{\"filter\": { \"operation\": \"rent\", \"propertyType\": \"homes\", \"center\": \"42.223661,-8.730236\",\"distance\": 15000, \"maxPrice\": 850, \"studio\": false,\"bedrooms\": 2,\"furnished\": \"furnished\"},\"preferences\": [{\"apartmentAttribute\": {\"name\": \"hasLift\",\"added\": true},\"score\": 1},{\"apartmentAttribute\": {\"name\": \"allowPets\",\"added\": true},\"score\": 2}]} ";

  constructor(private http: HttpClient, private apartmentService: ApartmentService) { }

  fetchApartments() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("apartmentRankRequest", this.apartmentRankRequest);

    this.http.get('https://localhost:7106/SearchApartments', { params: queryParams })
      .subscribe(apartments => {
        console.log(apartments);
      })
  }
}
