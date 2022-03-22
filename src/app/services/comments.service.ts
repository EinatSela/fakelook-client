import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentUrl = 'https://localhost:44349/comments/';

  constructor(private http: HttpClient) {}
  public getCommentByPostId(id: number): Observable<any[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.commentUrl + 'PostId?id=' + id, httpOptions);
  }
  public addComment(comment: Comment) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http
      .post<Comment>(this.commentUrl + 'Add', comment, httpOptions)
      .subscribe((res) => {});
  }
}
