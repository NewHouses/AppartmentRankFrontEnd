import { Component } from '@angular/core';
import { ApartmentAttribute } from '../../shared/apartmentAttribute.model';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent {
  apartmentAttributes: ApartmentAttribute[] = [
    new ApartmentAttribute('Terraza', 2),
    new ApartmentAttribute('Dúas habitacións', 3),
  ]
}
