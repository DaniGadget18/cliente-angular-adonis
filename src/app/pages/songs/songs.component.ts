import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SongModel } from 'src/app/models/song.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  songs: SongModel[] = [];
  cargando = false;

  ngOnInit(): void {

    this.cargando = true;
    this.apiService.getCanciones()
    .subscribe(  resp => {
        this.songs = resp['data'];
        this.cargando = false;
     });
  }

  eliminarCancion(song: SongModel, i: number){

    Swal.fire({
      title:'¿Está seguro?',
      text:`¿Está seguro que quiere borrar a ${song.nombre}`,
      icon: 'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp =>{
      if (resp.value) {
        this.songs.splice(i,1)
        this.apiService.eliminarCancion(song.id).subscribe();
      }
    });

  }

}
