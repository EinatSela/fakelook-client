import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Like } from 'src/app/models/like';
import { Post } from 'src/app/models/post';
import { LikesService } from 'src/app/services/likes.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: any;
  public likes$?: any[];
  public LikeBtn: boolean = true;

  constructor(private router: Router, private likesService: LikesService) {}

  ngOnInit(): void {
    this.likesService
      .getLikesByPostId(this.post.id)
      .subscribe((res) => (this.likes$ = res));
  }
  addLike() {
    this.LikeBtn = !this.LikeBtn;
    let like: Like;
    like = {
      //todo
      userId: 1,
      postId: this.post.id,
      isActive: true,
    };
    this.likesService.addLike(like);
    window.location.reload();
    return false;
  }
}
