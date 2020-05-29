import { Component, OnInit } from '@angular/core';
import { SongModel } from 'src/app/models/song.model';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

    song: SongModel = new SongModel();

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
      if (form.invalid) {
        console.log('Formulario invalido')
        return ;
      }
      console.log(localStorage.getItem('token'))
      this.apiservice.guardarCancion(this.song).subscribe((resp: any) => {
        console.log(resp);
      });

  }

}
