import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/Iuser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from './TokenService';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private userUrl = 'https://localhost:44349/api/Users/Login';
  subs: Subscription[] = [];
  private tokenService: TokenService;

  constructor(private http: HttpClient, private router: Router) {
    this.tokenService = new TokenService(http);
  }

  login(user: IUser): void {
    this.subs.push(
      this.http.post<any>(this.userUrl, user).subscribe((res) => {
        this.tokenService.setToken(res.token);
        this.router.navigateByUrl('/main-feed');
      })
    );
  }
}
