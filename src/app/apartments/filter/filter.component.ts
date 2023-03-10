import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../../shared/data-storage.service';
import { Filter } from './Filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @ViewChild('f', { static: false }) filterForm: NgForm;

  constructor(private dataStorageService: DataStorageService) { }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newFilter = new Filter(value.maxPrice, value.bedrooms);
    this.dataStorageService.fetchApartments(newFilter)
  }

  onClear() {
    this.filterForm.reset();
  }
}
