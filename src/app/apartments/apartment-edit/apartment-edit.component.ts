import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private apartmentService: ApartmentService) {

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
      .withImage(this.apartmentForm.value['imageUrl'])
      .withDescription(this.apartmentForm.value['description'])
      .withApartmentAttributes(this.apartmentForm.value['apartmentAttributes']);

    if (this.editMode) {
      newApartment.withLink(this.apartmentService.getApartment(this.apartmentId).link);
      this.apartmentService.updateApartment(this.apartmentId, newApartment.build());
    }
    else {
      this.apartmentService.addApartment(newApartment.build());
    }
    this.onCancel();
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
      apartmentImagePath = apartment.imageUrl;
      apartmentDescription = apartment.description;
      if (apartment['apartmentAttributes']) {
        for (let apartmentAttribute of apartment.apartmentAttributes) {
          apartmentApartmentAttributes.push(
            new FormGroup({
              'name': new FormControl(apartmentAttribute.name, Validators.required),
              'added': new FormControl(apartmentAttribute.added, [
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
      'imageUrl': new FormControl(apartmentImagePath, Validators.required),
      'description': new FormControl(apartmentDescription, Validators.required),
      'apartmentAttributes': apartmentApartmentAttributes
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteApartmentAttribute(index: number) {
    (<FormArray>this.apartmentForm.get('apartmentAttributes')).removeAt(index);
  }
}
