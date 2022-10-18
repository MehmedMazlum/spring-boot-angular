import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/car/authenticationService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: AuthenticationService) { }
  ngOnInit() {
  }
}
