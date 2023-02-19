import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Apartment } from '../../apartment.model';
import { ApartmentService } from '../../apartment.service';

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.css']
})
export class ApartmentItemComponent implements OnInit {
  @Input('apartmentItem') apartment!: Apartment;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
  }

  onSelected() {
    this.apartmentService.apartmentSelected.emit(this.apartment);
  }
}
