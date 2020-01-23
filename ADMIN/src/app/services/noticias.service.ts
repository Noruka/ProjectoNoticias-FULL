import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Noticia} from "../models/Noticia";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient ) { }

  getNoticias() {
    return this.http.get(`${this.API_URI}/noticias`);
  }

  getNoticia( id: string) {
    return this.http.get(`${this.API_URI}/noticias/${id}`);
  }

  saveNoticia( noticia: Noticia ) {
    return this.http.post(`${this.API_URI}/noticias`, noticia);
  }

  deleteNoticia( id: string) {
    return this.http.delete(`${this.API_URI}/noticias/${id}`);
  }

  updateNoticia( id: string|number, updatedNoticia: Noticia): Observable<Noticia> {
    return this.http.put(`${this.API_URI}/noticias/${id}`,updatedNoticia);
  }

}
