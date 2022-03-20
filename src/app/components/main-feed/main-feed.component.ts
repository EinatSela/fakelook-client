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
  public tokenID$: Observable<any> | undefined;
  public userName$: Observable<any> | undefined;
  public userId$?: number;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.getToken().subscribe((res) => {
      this.userId$ = res;
    });
  }
}
