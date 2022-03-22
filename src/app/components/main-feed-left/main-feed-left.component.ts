import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/TokenService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-feed-left',
  templateUrl: './main-feed-left.component.html',
  styleUrls: ['./main-feed-left.component.css']
})
export class MainFeedLeftComponent implements OnInit {
  @Input() userId?: number | undefined;
  @Input() userName? : string;

  constructor(
    private router: Router,
    private tokenService : TokenService) { }

  ngOnInit(): void {

  }

  logout(){
    this.router.navigateByUrl('');
    this.tokenService.deleteToken();
  }

}
