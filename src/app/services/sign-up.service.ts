import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from './TokenService';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private userUrl = 'https://localhost:44349/api/Users/SaveUser';
  subs: Subscription[] = [];

  constructor(private http: HttpClient, private router : Router) {
  }

  public addUser(newUser: User) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<any>(this.userUrl, newUser, httpOptions).subscribe();
    this.router.navigateByUrl('/signin');
  }
}
