import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  areNotEqualPasswords: boolean;
  error: string;

  constructor(private authService: AuthService, private router: Router) {

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

    this.authService.signup(username, password).subscribe((resData) => {
      console.log(resData);
      form.reset();
      this.router.navigate(['']);
    }, error => {
      console.log(error);
      this.error = 'Ocorreu un erro durante a creación do novo usuario!'
      form.reset();
    });
  }
}
