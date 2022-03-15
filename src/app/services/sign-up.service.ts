import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private userUrl = 'https://localhost:44349/api/Users/SignUp';

  constructor(private http: HttpClient) {}

  public addUser(newUser: User) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<User>(this.userUrl, newUser, httpOptions).subscribe();
  }
}
