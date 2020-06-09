import { Component, OnInit, ErrorHandler } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: User;

  constructor(private apiservice: ApiService,
              private router:Router) {}

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    this.apiservice.registerUser(this.user).subscribe((resp: any) => {
      

      if (resp.message === "Ok") {
        this.apiservice.saveToken(resp.data['token']);
        this.router.navigateByUrl('/home');
      } else {
        Swal.fire({
        icon: 'error',
        title: resp.message,
        showConfirmButton: false,
        timer: 1500
          });
      }
      
    });
  }
}
