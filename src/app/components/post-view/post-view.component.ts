import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Like } from 'src/app/models/like';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { TokenService } from 'src/app/services/TokenService';
import { Comment } from 'src/app/models/comment';
import { ThisReceiver } from '@angular/compiler';
import { TagsService } from 'src/app/services/tags.service';
import { UserService } from 'src/app/services/user.service';
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
  public userName : string = '';
  constructor(
    private likesService: LikesService,
    private commentsServise: CommentsService,
    private tokenService: TokenService,
    public dialogRef: MatDialogRef<PostViewComponent>,
    private tagService : TagsService,
    private userService : UserService,
    @Inject(MAT_DIALOG_DATA) public data: PostData
  ) {}

  ngOnInit(): void {
    this.tokenService.getToken().subscribe((res) => {
      this.userId = res;
      this.userName = this.userService.dict[res];
    });
    this.likesService
      .getLikesByPostId(this.data.postId)
      .subscribe((res) => ((this.likes$ = res), this.initLike()));
    this.commentsServise
      .getCommentByPostId(this.data.postId)
      .subscribe((res) => (this.comments$ = res));
  }
  initLike() {
    //if he liked it post
    this.LikeStatus = this.likes$!.some(
      (e) => e.userId === this.userId && e.isActive
    );
    this.LikeBegin = this.LikeStatus;
    this.numberOfLikes = this.likes$!.filter((e) => e.isActive).length;
  }
  onClick(): void {
    //check if need to do something
    let like1: Like;
    if (this.LikeStatus != this.LikeBegin) {
      //check if in the list
      if (
        (this.LikeStatus = this.likes$!.some((e) => e.userId === this.userId))
      ) {
        like1 = this.likes$!.find((e) => e.userId === this.userId);
        if (this.LikeBegin) {
          like1.isActive = false;
        } else {
          like1.isActive = true;
        }
        this.likesService.EditLike(like1);
      } else {
        like1 = {
          userId: this.userId!,
          postId: this.data.postId,
          isActive: true,
        };
        this.likesService.addLike(like1);
      }
    }
    this.dialogRef.close();
  }

  changeBtn() {
    if (this.LikeStatus) {
      this.numberOfLikes!--;
      this.LikeStatus = !this.LikeStatus;
    } else {
      this.numberOfLikes!++;
      this.LikeStatus = !this.LikeStatus;
    }
  }

  addComment() {
    let comment: Comment;
    comment = {
      content: this.content,
      userId: this.userId!,
      postId: this.data.postId,
      tags : this.tagService.createTags(this.content),
    };
    this.commentsServise.addComment(comment);
    this.comments$?.push(comment);
    this.content = '';
  }
  commentOn() {
    this.showComments = !this.showComments;
  }
}
