import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopModel } from '../../../models/shop.model';
import { ApiService } from '../../../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {

  shop = new ShopModel();

  constructor( private apiservice: ApiService,
               private router:Router ) { }

  ngOnInit(): void {
  }

  addShop(ngform : NgForm) {
    console.log(ngform);
    if (ngform.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido en error',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.apiservice.addShop(this.shop).subscribe( (resp:any) =>{
      if(resp.status === "ok"){
        Swal.fire({
          icon: 'success',
          title: 'Se ha guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/shops');
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error con el servicio' + error.error.message,
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

}
