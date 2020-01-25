import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Noticia} from '../models/Noticia';
import {Observable} from 'rxjs';
import {Comentario} from "../models/Comentario";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  /*lo mismo que en la pagina de angular. funciones que devuelven json's de la api*/

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getNoticias() {
    return this.http.get<Noticia[]>(`${this.API_URI}/noticias`);
  }

  getNoticia(id: string) {
    return this.http.get(`${this.API_URI}/noticias/${id}`);
  }

  getNoticiaSeccion(seccion: string) {
    return this.http.get<Noticia[]>(`${this.API_URI}/noticias/seccion/${seccion}`);
  }

  getComentarios(id: string) {
    return this.http.get<Comentario[]>(`${this.API_URI}/noticias/comentarios/${id}`);
  }

  saveComentario( comentario: Comentario ) {
    return this.http.post(`${this.API_URI}/noticias/comentarios/`, comentario);
  }

}
