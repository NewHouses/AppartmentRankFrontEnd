import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../../shared/data-storage.service';
import { Filter } from './Filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @ViewChild('f', { static: false }) filterForm: NgForm;
  map: google.maps.Map;
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingControlOptions: {
      drawingModes: [
        google.maps.drawing.OverlayType.CIRCLE,
      ],
    }
  });
  circleArea: google.maps.Circle | null | undefined;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: {
          lat: 42.2191814,
          lng: -8.74549713
        }
      }
    );
    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event: any) => {
      if (this.circleArea != null)
        this.circleArea.setMap(null);
      this.circleArea = event.overlay;
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    var center = this.circleArea?.getCenter()?.toString();
    var radius = this.circleArea ? this.circleArea.getRadius() : 4000;
    const newFilter = new Filter(value.maxPrice, value.bedrooms, center ? center : '42.22788973334626,-8.72946020788653', radius);
    this.dataStorageService.fetchApartments(newFilter)
  }

  onClear() {
    this.filterForm.reset();
    if (this.circleArea != null) {
      this.circleArea.setMap(null);
      this.circleArea = null;
    }
  }
}
