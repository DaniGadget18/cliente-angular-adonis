import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { GameModel } from '../../models/game.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gameedit',
  templateUrl: './gameedit.component.html',
  styleUrls: ['./gameedit.component.css']
})
export class GameeditComponent implements OnInit {

  game = new GameModel();


  constructor( private route:ActivatedRoute, 
               private apiservices: ApiService ) {

    this.route.params.subscribe( (params) =>{
      this.apiservices.getGameByID(params.id).subscribe( (resp:any) => {
        this.game.id = resp.data[0]['id'];
        this.game.categoria = resp.data[0]['categoria'];
        this.game.nombre = resp.data[0]['nombre'];
        this.game.rate = resp.data[0]['rate'];
        this.game.fecha_lanzamiento = resp.data[0]['fecha_lanzamiento'];
        this.game.descripcion = resp.data[0]['descripcion'];
        console.log(this.game);
      });
    });
   }

  ngOnInit(): void {
  }

  updateGame(form:NgForm){
    console.log(form);

    if(!form.valid){
      console.log('error');
      return;
    }

    this.apiservices.updateGame(this.game).subscribe( (resp:any) =>{
      if(resp.status === "ok"){
        Swal.fire({
          icon: 'success',
          title: 'Se ha actualizado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error con el servicio' + error,
        showConfirmButton: false,
        timer: 1500
      });
    });
  }



}
