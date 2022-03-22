import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  change(username:string, password1:string, password2:string){
    if(password1 != password2){
      //handle
    }
    this.userService.changePassword(username, password1).subscribe();
    this.router.navigate(['']);
  }

}
