import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameModel } from '../../models/game.model';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game = new GameModel();

  constructor( private apiservice: ApiService ) { }

  ngOnInit(): void {
  }

  addGame(ngform : NgForm) {
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
    this.apiservice.addGame(this.game).subscribe( (resp:any) =>{
      if(resp.status === "ok"){
        Swal.fire({
          icon: 'success',
          title: 'Se ha guardado correctamente el juego',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error con el servicio',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

}
