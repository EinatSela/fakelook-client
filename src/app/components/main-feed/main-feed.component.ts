import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/TokenService';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css'],
})
export class MainFeedComponent implements OnInit {
  public tokenID$ : number | undefined;
  public userName$ : Observable<any> | undefined;

  constructor(private router: Router, private tokenService:TokenService) {}

  ngOnInit(): void {
    this.tokenID$ = this.tokenService.getToken();


  }

  addNewPost() {
    this.router.navigate(['/add-post']);
  }
}
