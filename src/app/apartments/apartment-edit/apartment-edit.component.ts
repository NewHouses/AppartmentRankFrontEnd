import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentBuilder } from '../apartment.builder';
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

  get controls() {
    return (<FormArray>this.apartmentForm.get('apartmentAttributes')).controls;
  }

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
    const newApartment = new ApartmentBuilder()
      .withName(this.apartmentForm.value['name'])
      .withImage(this.apartmentForm.value['imagePath'])
      .withDescription(this.apartmentForm.value['description'])
      .withApartmentAttributes(this.apartmentForm.value['apartmentAttributes']);

    if (this.editMode) {
      newApartment.withLink(this.apartmentService.getApartment(this.apartmentId).link);
      this.apartmentService.updateApartment(this.apartmentId, newApartment.build());
    }
    else {
      this.apartmentService.addApartment(newApartment.build());
    }
  }

  onAddApartmentAttribute() {
    (<FormArray>this.apartmentForm.get('apartmentAttributes')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'score': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^-[1-5]|^[0-5]/)
        ])
      })
    );
  }

  private initForm() {
    let apartmentName = '';
    let apartmentImagePath = '';
    let apartmentDescription = '';
    let apartmentApartmentAttributes = new FormArray<any>([]);

    if (this.editMode) {
      const apartment = this.apartmentService.getApartment(this.apartmentId);
      apartmentName = apartment.name;
      apartmentImagePath = apartment.imagePath;
      apartmentDescription = apartment.description;
      if (apartment['apartmentAttributes']) {
        for (let apartmentAttribute of apartment.apartmentAttributes) {
          apartmentApartmentAttributes.push(
            new FormGroup({
              'name': new FormControl(apartmentAttribute.name, Validators.required),
              'score': new FormControl(apartmentAttribute.score, [
                Validators.required,
                Validators.pattern(/^-[1-5]|^[0-5]/)
              ])
            })
          );
        }
      }
    }

    this.apartmentForm = new FormGroup({
      'name': new FormControl(apartmentName, Validators.required),
      'imagePath': new FormControl(apartmentImagePath, Validators.required),
      'description': new FormControl(apartmentDescription, Validators.required),
      'apartmentAttributes': apartmentApartmentAttributes
    });
  }
}
