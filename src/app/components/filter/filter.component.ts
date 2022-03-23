import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Query } from 'src/app/models/query';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public minDate?: Date;
  public maxDate?: Date;
  public publisherName: string;
  public publisherId: null | number[] = null;
  @Output() updatePosts = new EventEmitter<Post[]>();

  // public filterTags: null| string[] = null;
  // public filterUserTags: null| string[] = null;

  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {
    this.publisherName = '';
  }

  ngOnInit(): void {}
  filter() {
    this.initPublishId();
    let query: Query;
    query = {
      minDate: this.minDate,
      maxDate: this.maxDate,
      //publisherId: this.publisherId,
    };
    this.postService
      .FilterPost(query)
      .subscribe((res) => this.updatePosts.emit(res));
  }
  initPublishId() {
    let arr = this.publisherName.split(',');
    console.log(this.publisherName);
    if (this.publisherName?.length > 0) {
      let res = this.getIdByUserName(this.publisherName);
      //this.publisherId?.push(parseInt(res));
    }
    console.log(this.publisherId);
  }
  getIdByUserName(value: string) {
    let ids = Object.keys(this.userService.dict);
    if (ids) {
      for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        if (this.userService.dict[parseInt(id)] == value) {
          return id;
        }
      }
    }
    return -1;
  }
}
