import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  public post?: any;
  public userId$: any;
  public likes$?: any[];
  public LikeBtn: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
