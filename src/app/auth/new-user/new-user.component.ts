import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  areNotEqualPasswords: boolean;

  onSubmit(form: NgForm) {
    const value = form.value;

    if (value.password != value.repeatedPassword) {
      this.areNotEqualPasswords = true;
    }
    else {
      this.areNotEqualPasswords = false;
      form.reset();
    }
  }
}
