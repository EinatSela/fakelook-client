import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';

export interface PostData {
  description: string;
  imageSorce: string;
  id: number;
}
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent {
  afterEdit?: Observable<Post>;
  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
