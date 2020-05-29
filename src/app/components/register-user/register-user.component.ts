import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: User;

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.user);
    console.log(form);
    this.apiservice.registerUser(this.user).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
