import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-shop',
  templateUrl: './read-shop.component.html',
  styleUrls: ['./read-shop.component.css']
})
export class ReadShopComponent implements OnInit {

  shops:any[] = [];
  loading:boolean = true;

  constructor( private apiservice: ApiService ) {

    this.apiservice.getShop().subscribe( (resp:any) => {
      this.shops = resp.data;
      this.loading = false;
      console.log(this.shops);
    });

   }

  ngOnInit(): void {
  }

  deleteShop(id:any, i) {



    Swal.fire({
      title: '¿Estas seguro?',
      text: "Eliminar el registro con id = " + id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.apiservice.deleteShop(id).subscribe( (resp:any) =>{
          Swal.fire({
            icon: 'success',
            title: 'Se ha eliminado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.shops.splice(i,1);
        }, (error) =>{
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error en el servicio',
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  }

}
