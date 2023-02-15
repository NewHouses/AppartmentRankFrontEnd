import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Apartment } from '../../apartment.model';

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.css']
})
export class ApartmentItemComponent implements OnInit {
  @Input('apartmentItem') apartment!: Apartment;
  @Output() apartmentSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.apartmentSelected.emit();
  }
}
