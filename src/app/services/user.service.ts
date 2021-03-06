import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, mergeMap, of } from 'rxjs';
import { User } from '../models/user';
import { TokenService } from './TokenService';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getUsrUrl = 'https://localhost:44349/api/Users/ById?id=';
  private getUsrByNameUrl =
    'https://localhost:44349/api/Users/ByUsername?name=';
  private passwordUrl = 'https://localhost:44349/api/Users/Edit';
  private getDictUrl = 'https://localhost:44349/api/Users/GetDIct';
  private user?: User;
  public dict: any[] = [];
  // public userId?: number;

  constructor(private http: HttpClient, 
    private tokenService: TokenService,) {
    this.getUserDict();
  }

  getUser(userId?: string): Observable<User> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.tokenService
      .getToken()
      .pipe(
        mergeMap((res) => this.http.get<any>(this.getUsrUrl + res, httpOptions))
      );
  }

  getUserByName(userName?: string): Observable<User> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.getUsrByNameUrl + userName, httpOptions);
  }
  getUserDict() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<any>(this.getDictUrl, httpOptions)
      .subscribe((res) => (this.dict = res));
  }
  changePassword(username: string, password: string): Observable<User> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let user: User;
    user = {
      password: password,
      userName: username,
    };
    return this.http.put<User>(this.passwordUrl, user, httpOptions);
  }
}
