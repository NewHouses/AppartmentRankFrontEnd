import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrls: ['./apartment-edit.component.css']
})
export class ApartmentEditComponent implements OnInit {
  apartmentId: number;
  editMode = false;
  apartmentForm: FormGroup;

  constructor(private route: ActivatedRoute, private apartmentService: ApartmentService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.apartmentId = +params['apartmentId'];
        this.editMode = params['apartmentId'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log(this.apartmentForm);
  }

  private initForm() {
    let apartmentName = '';
    let apartmentImagePath = '';
    let apartmentDescription = '';

    if (this.editMode) {
      const apartment = this.apartmentService.getApartment(this.apartmentId);
      apartmentName = apartment.name;
      apartmentImagePath = apartment.imagePath;
      apartmentDescription = apartment.description;
    }

    this.apartmentForm = new FormGroup({
      'name': new FormControl(apartmentName),
      'imagePath': new FormControl(apartmentImagePath),
      'description': new FormControl(apartmentDescription)
    });
  }
}
