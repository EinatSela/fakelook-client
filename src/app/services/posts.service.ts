import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Query } from '../models/query';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public postArray: Observable<Post[]> | undefined;
  private postUrl = 'https://localhost:44349/Posts/';
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<Post[]>(this.postUrl + 'All', httpOptions);
  }

  public newPost(post: Post) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<Post>(this.postUrl + 'Add', post, httpOptions).subscribe();
  }

  public EditPost(post: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<Post>(this.postUrl + 'Edit', post, httpOptions);
  }
  public FilterPost(query: Query): Observable<Post[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Post[]>(this.postUrl + 'ByQuery', query, httpOptions);
  }
}
