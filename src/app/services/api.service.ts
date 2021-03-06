import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { SongModel } from '../models/song.model';
import { SongsComponent } from '../pages/songs/songs.component';
import { GameModel } from '../models/game.model';
import { ShopModel } from '../models/shop.model';

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

    getCanciones(){
      return this.petition.get(`${this.url}/canciones/get`);
    }

    getPorId(id: string){
      const data = {
        id
      }
      return this.petition.post(`${this.url}/canciones/getId`, data);
    }

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

  actualizarCancion(song:SongModel){
    const data = {
      ...song
    }

    return this.petition.put(`${this.url}/canciones/editar`, data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      observe: 'response'
    });
  }

  eliminarCancion(id: string){
    const data = {
      id
    }
    console.log(data)
    return this.petition.post(`${this.url}/canciones/eliminar`, data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      observe: 'response'
    });
  }


  // CRUD juegos

  getGames() {
    return this.petition.get(`${this.url}/juegos/get`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  addGame( game:GameModel ){
    const data = {
      ...game
    }
    return this.petition.post(`${this.url}/juegos/registrar`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getGameByID(id:any){
    return this.petition.get(`${this.url}/juegos/get/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  updateGame(game:GameModel){
    const data = {
      ...game
    }
    return this.petition.post(`${this.url}/juegos/editar`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteGame(id:any) {
    const data = {
      id: id
    }
    return this.petition.post(`${this.url}/juegos/eliminar`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  //CRUD tiendas

  getShop() {
    return this.petition.get(`${this.url}/shops`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteShop(id:any) {
    const data = {
      id: id
    }
    return this.petition.post(`${this.url}/shops/delete`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  addShop( shop:ShopModel ){
    const data = {
      ...shop
    }
    return this.petition.post(`${this.url}/shops/create`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

}
