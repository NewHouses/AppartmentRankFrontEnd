import { Component } from '@angular/core';
import { Filter } from '../apartments/filter/Filter.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataSorageService: DataStorageService) { }

  onFetchApartments() {
    this.dataSorageService.fetchApartments(new Filter(2000, 0, '42.22788973334626,-8.72946020788653', 4000));
  }
}
