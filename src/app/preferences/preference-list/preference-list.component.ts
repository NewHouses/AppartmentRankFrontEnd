import { Component, OnInit } from '@angular/core';
import { ApartmentAttribute } from '../../shared/apartmentAttribute.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  apartmentAttributes: ApartmentAttribute[] = [];
  constructor(private preferenceServices: PreferenceService) { }

  ngOnInit(): void {
    this.apartmentAttributes = this.preferenceServices.getPreferences();
    this.preferenceServices.preferencesChanged.subscribe(
      () => {
        this.apartmentAttributes = this.preferenceServices.getPreferences();
      }
      )
  }
}
