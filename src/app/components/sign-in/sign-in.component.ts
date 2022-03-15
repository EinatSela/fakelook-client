import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private signInService: SignInService) {}

  ngOnInit(): void {}
}