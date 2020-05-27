import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user = new User();

  constructor( private apiservice: ApiService ) { }

  ngOnInit(): void {
  }

  registerUser(ngform: NgForm){
    this.apiservice.registerUser(this.user).subscribe( (resp:any) => {
      console.log(resp);
    });
  }

}
