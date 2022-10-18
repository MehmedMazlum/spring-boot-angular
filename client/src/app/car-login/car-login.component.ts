import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { Router } from '@angular/router';
import {User} from '../user';
import {AuthenticationService} from '../shared/car/authenticationService';

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './car-login.component.html',
  styleUrls: ['./car-login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;
  user: User;
  invalidLogin = false;

  constructor(private service: CarService, private router: Router, private  authenticationService:  AuthenticationService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  checkLogin() {
    this.service.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      this.message = data;
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
      this.invalidLogin = false;
      this.router.navigate(['/home']);
    }, () => {
      this.invalidLogin = true;
      console.log('you dont login properly');
      alert('you dont login properly');
    });
  }
}
