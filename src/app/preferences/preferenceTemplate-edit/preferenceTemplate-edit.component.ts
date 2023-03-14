import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Area, LatLong } from '../../shared/area.model';
import { Preference } from '../../shared/preference.model';
import { PreferenceArea } from '../../shared/preferenceArea.model';
import { PreferenceTemplate } from '../../shared/preferenceTemplate.model';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'app-preferenceTemplate-edit',
  templateUrl: './preferenceTemplate-edit.component.html',
  styleUrls: ['./preferenceTemplate-edit.component.css']
})
export class PreferenceTemplateEditComponent implements OnInit, OnDestroy {
  map: google.maps.Map;
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingControlOptions: {
      drawingModes: [
        google.maps.drawing.OverlayType.POLYGON,
      ],
    }
  });
  polygons: google.maps.Polygon[] = [];
  areas: Area[] = [];
  preferencesForm: FormGroup;
  editSubscription: Subscription;
  editMode = false;
  editedPreferenceTemplateIndex: number;
  editedPreferenceTemplate: PreferenceTemplate;

  constructor(private preferenceService: PreferenceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: {
          lat: 42.2191814,
          lng: -8.74549713
        }
      }
    );
    this.drawingManager.setMap(this.map);
    
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event: any) => {
      this.polygons.push(event.overlay);
      var vertices = this.getPolygonCoordinates(event.overlay);
      this.addArea(vertices);
    });

    this.editSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.editedPreferenceTemplateIndex = +params['preferenceTemplateId'];
        this.editedPreferenceTemplate = this.preferenceService.getPreferenceTemplate(this.editedPreferenceTemplateIndex);
        this.editMode = params['preferenceTemplateId'] != null;
        this.initForm()
   }
    );
  }

  getPolygonCoordinates(polygon: google.maps.Polygon): google.maps.LatLng[] {
    var path = polygon.getPath();
    const coordinates: google.maps.LatLng[] = [];
    for (let i = 0; i < path.getLength(); i++) {
      coordinates.push(path.getAt(i));
    }
    return coordinates;
  }

  addArea(vertices: google.maps.LatLng[]) {
    var areaName = this.preferencesForm.value.areaName;
    if (areaName === '' || areaName === null)
      areaName = 'Area ' + (this.areas.length + 1);
    console.log("nome da Area: " + areaName);

    var area = new Area(areaName);
    for (let i = 0; i < vertices.length; i++) {
      var vertice = vertices.at(i);
      var latLong = new LatLong(vertice != null ? vertice.lat() : 0, vertice != null ? vertice.lng() : 0);
      area.path.push(latLong);
      console.log("Latitude: " + vertice?.lat() + " Longitude: " + vertice?.lng());
    }
    this.areas.push(area);
    console.log(this.areas);
    var controlName = 'score ' + areaName;
    this.preferencesForm.addControl(controlName, new FormControl(0));
    this.preferencesForm.controls['areaName'].reset()
  }

  private initForm() {
    let preferenceTemplateName = '';
    let preferenceTemplatePrice;
    let preferenceTemplateSize;
    let preferenceTemplateAreaName = '';

    if (this.editMode) {
      this.editedPreferenceTemplate = this.preferenceService.getPreferenceTemplate(this.editedPreferenceTemplateIndex);
      preferenceTemplateName = this.editedPreferenceTemplate.name;
      preferenceTemplatePrice = this.editedPreferenceTemplate.preferences.find(p => p.name === "price")?.score;
      if (preferenceTemplatePrice === null)
        preferenceTemplatePrice = 0;
      preferenceTemplateSize = this.editedPreferenceTemplate.preferences.find(p => p.name === "size")?.score;
      if (preferenceTemplateSize === null)
        preferenceTemplateSize = 0;
    }

    this.preferencesForm = new FormGroup({
      'name': new FormControl(preferenceTemplateName, Validators.required),
      'price': new FormControl(preferenceTemplatePrice, Validators.required),
      'size': new FormControl(preferenceTemplateSize, Validators.required),
      'areaName': new FormControl(preferenceTemplateAreaName),
    });

    if (this.editMode) {
      for (let i = 0; i < this.editedPreferenceTemplate.preferenceAreas.length; i++) {
        this.areas.push(this.editedPreferenceTemplate.preferenceAreas[i].area);
        var controlName = 'score ' + this.editedPreferenceTemplate.preferenceAreas[i].area.name;
        this.preferencesForm.addControl(controlName, new FormControl(this.editedPreferenceTemplate.preferenceAreas[i].score));
      }
    }
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onSubmit() {
    const value = this.preferencesForm.value;
    const newPreferenceTemplate = new PreferenceTemplate(value.name);

    newPreferenceTemplate.preferences.push(...[
      new Preference("price", value.price),
      new Preference("size", value.size)])

    console.log(value);

    for (let i = 0; i < this.areas.length; i++) {
      var controlName = 'score ' + this.areas[i].name;
      newPreferenceTemplate.preferenceAreas.push(new PreferenceArea(this.areas[i], this.preferencesForm.value[controlName]));
    }
    

    this.router.navigate(['../'], { relativeTo: this.route });
    if (this.editMode) {
      this.preferenceService.updatePreferenceTemplate(this.editedPreferenceTemplateIndex, newPreferenceTemplate);
    }
    else {
      this.preferenceService.addPreferenceTemplate(newPreferenceTemplate);
    }
    this.onClear();
    this.editMode = false;
  }

  onClear() {
    this.preferencesForm.reset();
    this.areas = [];
    for (let i = 0; i < this.polygons.length; i++) {
      this.polygons[i].setMap(null);
    }
    this.polygons = [];
  }

  onDelete() {
    this.preferenceService.deletePreferenceTemplate(this.editedPreferenceTemplateIndex);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
