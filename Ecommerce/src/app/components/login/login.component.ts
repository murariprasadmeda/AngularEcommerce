import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/classes/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin!: UserLogin;

  constructor() { }

  ngOnInit(): void {
  }

  submit(user:any){
    this.userLogin=user
    console.warn(this.userLogin);

  }
}
