import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games:any[] = [];
  loading:boolean = true;

  constructor( private apiservice: ApiService ) { 

    this.apiservice.getGames().subscribe( (resp:any) => {
      this.games = resp.data;
      this.loading = false;
      console.log(this.games);
    });

  }

  ngOnInit(): void {
  }


  deleteGame(id:any) {



    Swal.fire({
      title: '¿Estas seguro?',
      text: "Eliminar el juego con id = " + id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.apiservice.deleteGame(id).subscribe( (resp:any) =>{
          Swal.fire({
            icon: 'success',
            title: 'Se ha eliminado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
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
