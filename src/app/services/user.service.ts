import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, mergeMap } from 'rxjs';
import { User } from '../models/user';
import { TokenService } from './TokenService';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getUsrUrl = 'https://localhost:44349/api/Users/ById?id=';
  private getUsrByNameUrl = 'https://localhost:44349/api/Users/ByUsername?name=';
  private passwordUrl= 'https://localhost:44349/api/Users/Edit'
  private user?: User;
  // public userId?: number;
  private tokenservice: TokenService;

  constructor(private http: HttpClient) {
    this.tokenservice = new TokenService(http);
  }

  getUser(userId?: string): Observable<User> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.tokenservice
      .getToken()
      .pipe(
        mergeMap((res) => this.http.get<any>(this.getUsrUrl + res, httpOptions))
      );
  }

  getUserByName(userName?: string) : Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',
      }),
    };
    return this.http.get<any>(this.getUsrByNameUrl + userName, httpOptions);
  }

  changePassword(username : string, password : string): Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let user : User;
    user = {
      password : password,
      userName : username
    }
    return this.http.put<User>(this.passwordUrl, user, httpOptions);
  }
}
