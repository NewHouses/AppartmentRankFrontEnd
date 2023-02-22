import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: [ApartmentService]
})
export class ApartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
