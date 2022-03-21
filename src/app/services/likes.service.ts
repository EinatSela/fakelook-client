import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILike } from '../models/Ilike';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  private postUrl = 'https://localhost:44349/Likes/';
  constructor(private http: HttpClient) {}
  public getLikesByPostId(id: number): Observable<any[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    //let params = new HttpParams().set('id', id)
    return this.http.get<any>(this.postUrl + 'PostId?id=' + id, httpOptions);
  }
  public addLike(like: ILike) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http
      .post<ILike>(this.postUrl + 'Add', like, httpOptions)
      .subscribe((res) => {});
  }
}
