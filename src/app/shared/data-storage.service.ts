import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApartmentService } from "../apartments/apartment.service";
import { Filter } from "../apartments/filter/Filter.model";
import { PreferenceService } from "../preferences/preference.service";
import { ApartmentRankRequest } from "./apartmentRankRequest.model";
import { ApartmentRankResponse } from "./apartmentRankResponse.model";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private apartmentService: ApartmentService, private preferenceService: PreferenceService) { }

  fetchApartments(filter: Filter) {
    let queryParams = new HttpParams();
    let apartmentRankRequest = new ApartmentRankRequest(filter, this.preferenceService.getPreferences());
    queryParams = queryParams.append("apartmentRankRequest", JSON.stringify(apartmentRankRequest));

    this.http.get<ApartmentRankResponse>('https://localhost:7106/SearchApartments', { params: queryParams })
      .subscribe(apartments => {
        this.apartmentService.setApartments(apartments.apartments);
      })
  }
}
