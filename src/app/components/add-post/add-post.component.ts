import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  description: string = '';
  imageSorce: string = '';
  date: Date;
  x_Position: number = 0;
  y_Position: number = 0;
  z_Position: number = 0;
  userId: number = 0;
  longitude: number = 0;
  latitude: number = 0;

  constructor(private postService: PostsService) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.getLocation();
  }
  createPost() {
    let newPost: Post;
    newPost = {
      description: this.description,
      imageSorce: this.imageSorce,
      date: new Date(),
      x_Position: this.x_Position,
      y_Position: this.y_Position,
      z_Position: this.z_Position,
      userId: 4,
    };
    this.postService.newPost(newPost);
  }
  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.updatePosition();
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  public updatePosition() {
    var R = 6371;
    this.x_Position = R * Math.cos(this.latitude) * Math.cos(this.longitude);
    this.y_Position = R * Math.cos(this.latitude) * Math.sin(this.longitude);
    this.z_Position = R * Math.sin(this.latitude);
  }
}
