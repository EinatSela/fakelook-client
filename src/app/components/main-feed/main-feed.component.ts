import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { TokenService } from 'src/app/services/TokenService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css'],
})
export class MainFeedComponent implements OnInit {
  public tokenID$: Observable<any> | undefined;
  public user?: User;
  public userId?: string;
  public posts$: Post[] | undefined;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.user = res;
    });
    this.postsService.getAllPosts().subscribe((res) => (this.posts$ = res));
  }
  filter(posts: Post[]) {
    this.posts$ = posts;
  }
}
