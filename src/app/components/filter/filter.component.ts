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
  public publisherName;
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
    //this.initPublishId();
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
  // initPublishId() {
  //   console.log(this.userService.dict);
  //   debugger;
  //   if (this.publisherName?.length > 0) {
  //     //this.publisherId?.push(
  //     console.log(
  //       Object.keys(this.userService.dict).find(
  //         (e) => this.userService.dict[e] == this.publisherName
  //       )
  //     );
  //   }
  //   console.log(this.publisherId);
  // }
}
