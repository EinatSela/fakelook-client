import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../models/like';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  private postUrl = 'https://localhost:44349/Likes/';
  constructor(private http: HttpClient) {}
  public getLikesByPostId(id: number): Observable<any[]> {
    console.log('PostId?id=' + id);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    //let params = new HttpParams().set('id', id)
    return this.http.get<any>(this.postUrl + 'PostId?id=' + id, httpOptions);
  }
  public addLike(like: Like) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<Like>(this.postUrl + 'Add', like, httpOptions).subscribe();
  }
}
