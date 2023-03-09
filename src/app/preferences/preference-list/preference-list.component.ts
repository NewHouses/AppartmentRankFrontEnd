import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Preference } from '../../shared/apartmentAttribute.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit, OnDestroy {
  apartmentAttributes: Preference[] = [];
  private preferenceChangeSub: Subscription;

  constructor(private preferenceServices: PreferenceService) { }

  ngOnInit(): void {
    this.apartmentAttributes = this.preferenceServices.getPreferences();
    this.preferenceChangeSub = this.preferenceServices.preferencesChanged
      .subscribe(
        () => {
          this.apartmentAttributes = this.preferenceServices.getPreferences();
        }
    );
  }

  ngOnDestroy(): void {
    this.preferenceChangeSub.unsubscribe();
  }

  onEditApartmentAttribute(index: number) {
    this.preferenceServices.startedEditing.next(index);
  }
}
