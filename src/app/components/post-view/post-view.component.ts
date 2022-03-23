import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Like } from 'src/app/models/like';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { TokenService } from 'src/app/services/TokenService';
import { Comment } from 'src/app/models/comment';
export interface PostData {
  description: string;
  imageSorce: string;
  postId: number;
  userId: number;
}
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  public userId?: number;
  public numberOfLikes: number = 0;
  public likes$?: any[];
  public comments$?: any[];
  public content: string = '';
  public LikeBtn: boolean = true;
  public LikeStatus: boolean = false;
  public LikeBegin: boolean = false;
  public showComments: boolean = false;

  constructor(
    private likesService: LikesService,
    private commentsServise: CommentsService,
    private tokenService: TokenService,
    public dialogRef: MatDialogRef<PostViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostData
  ) {}

  ngOnInit(): void {
    this.likesService
      .getLikesByPostId(this.data.postId)
      .subscribe((res) => ((this.likes$ = res), this.initLike()));
    this.commentsServise
      .getCommentByPostId(this.data.postId)
      .subscribe((res) => (this.comments$ = res));
    this.tokenService.getToken().subscribe((res) => {
      this.userId = res;
    });
  }
  initLike() {
    this.LikeStatus = this.likes$!.some(
      (e) => e.userId === this.userId && e.isActive
    );
    this.LikeBegin = this.LikeStatus;
    console.log(this.LikeBegin);
    this.numberOfLikes = this.likes$!.length;
    console.log(this.numberOfLikes);
  }
  onClick(): void {
    if (this.LikeStatus != this.LikeBegin) {
      let like1: Like;
      if (this.LikeBegin) {
        like1 = this.likes$!.find((e) => e.userId === this.userId);
        this.likesService.EditLike(like1);
      } else {
        like1 = {
          userId: this.userId!,
          postId: this.data.postId,
        };
        this.likesService.addLike(like1);
      }
    }
    this.dialogRef.close();
  }

  changeBtn() {
    this.LikeBtn = !this.LikeBtn;
    if (this.LikeStatus) {
      this.numberOfLikes!--;
      this.LikeStatus = !this.LikeStatus;
    } else {
      this.numberOfLikes!++;
      this.LikeStatus = !this.LikeStatus;
    }
  }
  // addLike() {
  //   if (this.LikeBtn) {
  //     let like1: Like;
  //     like1 = this.likes$!.find((e) => e.userId === this.userId);
  //     this.likes$;
  //     this.likesService.EditLike(like1);
  //   } else {
  //     let like: Like;
  //     like = {
  //       userId: this.userId!,
  //       postId: this.data.postId,
  //       isActive: true,
  //     };
  //     this.likesService.addLike(like);
  //     this.likes$?.push(like);
  //   }
  // }
  addComment() {
    let comment: Comment;
    comment = {
      content: this.content,
      userId: this.userId!,
      postId: this.data.postId,
    };
    this.commentsServise.addComment(comment);
    this.comments$?.push(comment);
    this.content = '';
  }
  commentOn() {
    this.showComments = !this.showComments;
  }
}
