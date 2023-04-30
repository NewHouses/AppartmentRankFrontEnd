import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  areNotEqualPasswords: boolean;

  constructor(private authService: AuthService) {

  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const repeatedPassword = form.value.repeatedPassword;

    if (password != repeatedPassword) {
      this.areNotEqualPasswords = true;
      return;
    }

    this.areNotEqualPasswords = false;

    this.authService.signup(username, password).subscribe(resData => {
      console.log(resData);
    }, error => {
      console.log(error);
    });

    form.reset();
  }
}
