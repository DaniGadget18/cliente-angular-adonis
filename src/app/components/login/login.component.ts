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
  remember = false;

  constructor( private apiservice:ApiService,
               private router: Router ) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.remember = true;
    }

  }

  login(form:NgForm) {

    if (form.invalid){
      console.log("error");
      return;
    }

    this.apiservice.login(this.user).subscribe( (resp:any) => {

      if(this.remember){
        localStorage.setItem('email', this.user.email);
      }

      if(resp.message != "Ok"){
        console.log('error');
        return;
      }
      this.router.navigateByUrl('/home');
    }, (err) => {

      console.log(err);
    });
  }

}
