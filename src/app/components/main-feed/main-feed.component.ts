import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/TokenService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css'],
})
export class MainFeedComponent implements OnInit {

  public tokenID$: Observable<any> | undefined;
  public user?: User;
  public userId?: string;

  constructor(private router: Router, private tokenService: TokenService, private userService : UserService) {}

  ngOnInit(): void {
    this.tokenService.getToken().subscribe((res) => {
      this.userId = res;
    });
    // this.userService.getUser().subscribe((res)=> {this.user = res})
  }
}
