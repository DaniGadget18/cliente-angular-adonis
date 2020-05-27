import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class ApiService {

    url:string = "http://localhost:3333/api"

    constructor(private petition: HttpClient) {

    }


    login(user:User) {
        const data = {
            email: user.email,
            password: user.password
        }
        return this.petition.post(`${this.url}/usuarios/login`, data);
    }

    registerUser(user:User) {
        const data = {
            ...user
        }
        return this.petition.post(`${this.url}/usuarios/signup`, data);

    }
    
}