import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postUrl = 'https://localhost:44349/Posts/';
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<IPost[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IPost[]>(this.postUrl + 'All', httpOptions);
  }
  public newPost(post: IPost) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<IPost>(this.postUrl + 'Add', post, httpOptions).subscribe();
  }
  public EditPost(post: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<IPost>(this.postUrl + 'Edit', post, httpOptions);
  }
}
