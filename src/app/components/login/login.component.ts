import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { ApiService } from '../../services/api.service';
import { Route ,Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor( private apiservice:ApiService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  login(ngform:NgForm) {
    console.log(this.user);
    this.apiservice.login(this.user).subscribe( (resp:any) => {
      return resp;
    });
  }

}
