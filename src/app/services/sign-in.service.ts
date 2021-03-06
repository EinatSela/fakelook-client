import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from './TokenService';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private userUrl = 'https://localhost:44349/api/Users/Login';
  subs: Subscription[] = [];

  constructor(private http: HttpClient, private router: Router, private tokenService:TokenService) {
  }

  login(user: User): void {
    this.subs.push(
      this.http.post<any>(this.userUrl, user).subscribe((res) => {
        this.tokenService.setToken(res.token);
        this.router.navigateByUrl('/main-feed');
      })
    );
  }
}
