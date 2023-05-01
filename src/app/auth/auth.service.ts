import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(username: string, password: string) {
    return this.http.post<any>('https://localhost:7106/Authentication/signUp',
      {
        username: username,
        password: password,
      }
    );
  }
}
