import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-feed-left',
  templateUrl: './main-feed-left.component.html',
  styleUrls: ['./main-feed-left.component.css']
})
export class MainFeedLeftComponent implements OnInit {
  @Input() userId?: number | undefined;
  @Input() userName? : string;
  // public user? : User;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  logout(){
    
  }

}
