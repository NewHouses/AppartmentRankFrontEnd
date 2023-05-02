import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.model";

interface AuthResponseData {
  Message: string;
  username: string;
  token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(username: string, password: string) {
    return this.http.post<AuthResponseData>('https://localhost:7106/Authentication/signUp',
      {
        Username: username,
        Password: password
      }
    ).pipe(tap(resData => {
      this.handleAuthentication(resData.username, resData.token)
    }));
  }

  private handleAuthentication(username: string, token: string) {
    if (token != null) {
      const user = new User(username, token)
      this.user.next(user);
      console.log(this.user);
    }
  }
}
