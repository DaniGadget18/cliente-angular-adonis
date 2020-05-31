import { Component, OnInit } from '@angular/core';
import { SongModel } from 'src/app/models/song.model';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import  Swal  from "sweetalert2";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

    song: SongModel = new SongModel();

  constructor(private apiservice: ApiService,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != 'new') {
      this.apiservice.getPorId(id)
      .subscribe(resp =>{
       this.song = resp['data'][0]
      });
    }
  }

  onSubmit(form: NgForm){
      if (form.invalid) {
        console.log('Formulario invalido')
        return ;
      }

      Swal.fire({
        allowOutsideClick:false,
         title:'Espere...',
         text:'Guardando información',
         icon: 'info'

      });
      Swal.showLoading();

      let peticion: Observable<any>;

      if (this.song.id ) {
        peticion = this.apiservice.actualizarCancion(this.song);
      } else {
        peticion = this.apiservice.guardarCancion(this.song);
      }

      peticion.subscribe(resp => {

        Swal.fire({
          title: this.song.nombre,
          text: 'Se actualizó correctamente',
          icon: 'success'
        })

      });

  }

}
