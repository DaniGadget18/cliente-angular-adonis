import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { SongModel } from '../models/song.model';
import { SongsComponent } from '../pages/songs/songs.component';

@Injectable()
export class ApiService {

    url:string = "http://localhost:3333/api"
    userToken:string;

    constructor(private petition: HttpClient) {
        this.checkToken();
    }


    login(user:User) {
        const data = {
            email: user.email,
            password: user.password
        }
        return this.petition.post(`${this.url}/usuarios/login`, data)
        .pipe( map( (resp:any) => {
            this.saveToken(resp.data['token']);
            return resp;
        }));
    }

    saveToken( token:string ){
        localStorage.setItem('token', token);
    }

    checkToken() {
        if (localStorage.getItem('token')){
            this.userToken = localStorage.getItem('token')
        } else{
            this.userToken = '';
        }



    }


    registerUser(user:User) {
        const data = {
            ...user
        }

        return this.petition.post(`${this.url}/usuarios/signup`, data);

    }

    authenticate(): boolean {

        return this.userToken.length > 2;

    }

    //Canciones CRUD
    guardarCancion(song:SongModel) {
      const data = {
          ...song
      }

      return this.petition.post(`${this.url}/canciones/crear`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        observe: 'response'
      })
      .pipe( map( (resp:any) => {
        song.id = resp['body']['data'][0]['id'];
        return song;
      }));


  }

}
