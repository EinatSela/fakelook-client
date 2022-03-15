import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css'],
})
export class MainFeedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addNewPost() {
    this.router.navigate(['/add-post']);
  }
}
