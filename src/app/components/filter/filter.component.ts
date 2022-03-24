import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Query } from 'src/app/models/query';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public minDate?: Date;
  public maxDate?: Date;
  public publisherName: string;
  public publisherId: null | number[] = [];
  @Output() updatePosts = new EventEmitter<Post[]>();
  public filterTags: string;
  public filterTagsArr: null | string[] = [];

  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {
    this.publisherName = '';
    this.filterTags = '';
  }

  ngOnInit(): void {}
  filter() {
    this.initPublishId();
    this.filterTagsArr = this.parserInput(this.filterTags);
    if (this.filterTagsArr[0] == '') {
      this.filterTagsArr = null;
    }
    let query: Query;
    query = {
      minDate: this.minDate,
      maxDate: this.maxDate,
      publisherId: this.publisherId,
      filterTags: this.filterTagsArr,
    };
    this.postService
      .FilterPost(query)
      .subscribe((res) => this.updatePosts.emit(res));
    this.reset();
  }
  reset() {
    this.publisherId = [];
    this.publisherName = '';
    this.maxDate = undefined;
    this.minDate = undefined;
    this.filterTags = '';
    this.filterTagsArr = [];
  }
  resetFilter() {
    this.postService
      .getAllPosts()
      .subscribe((res) => this.updatePosts.emit(res));
  }
  
  initPublishId() {
    let arr = this.parserInput(this.publisherName);
    console.log(arr);
    if (arr[0] != '') {
      arr.forEach((name) =>
        this.publisherId!.push(Number(this.getIdByUserName(name)))
      );
    } else {
      this.publisherId = null;
    }
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
  parserInput(userNames: string): string[] {
    let arr = userNames.split(',');
    return arr;
  }
}
