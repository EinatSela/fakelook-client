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
  public userId$: any;
  public likes$?: any[];
  public comments$?: any[];
  public content: string = '';
  public LikeBtn: boolean = true;
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
      .subscribe((res) => (this.likes$ = res));
    this.commentsServise
      .getCommentByPostId(this.data.postId)
      .subscribe((res) => ((this.comments$ = res), console.log(res)));
    this.tokenService.getToken().subscribe((res) => {
      this.userId$ = res;
    });
  }

  onClick(): void {
    this.dialogRef.close();
  }
  addLike() {
    let like: Like;
    like = {
      userId: this.userId$!,
      postId: this.data.postId,
      isActive: true,
    };
    this.likesService.addLike(like);
    this.likes$?.push(like);
    this.LikeBtn = !this.LikeBtn;
  }
  addComment() {
    let comment: Comment;
    comment = {
      content: this.content,
      userId: Number(this.userId$!),
      postId: this.data.postId,
    };
    this.commentsServise.addComment(comment);
    this.comments$?.push(comment);
    this.content = '';
  }
}
