import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Noticia} from '../models/Noticia';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getNoticias() {
    return this.http.get<any[]>(`${this.API_URI}/noticias`);
  }

  getNoticia(id: string) {
    return this.http.get(`${this.API_URI}/noticias/${id}`);
  }

  getNoticiaSeccion(seccion: string) {
    return this.http.get(`${this.API_URI}/noticias/seccion/${seccion}`);
  }

}
