import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Noticia} from "../models/Noticia";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  API_URI = 'http://170.253.46.76:3000/api'; /*la ruta default de la api*/

  constructor(private http: HttpClient ) { }

  getNoticias() {
    return this.http.get(`${this.API_URI}/noticias`); /*enviarle una peticion para recojer la lista de noticias*/
  }

  getNoticia( id: string) {
    return this.http.get(`${this.API_URI}/noticias/${id}`); /*enviarle una peticion para cojer una noticia dado un id*/
  }

  saveNoticia( noticia: Noticia ) {
    return this.http.post(`${this.API_URI}/noticias`, noticia); /*peticion para guardar una noticia enviandosela*/
  }

  deleteNoticia( id: string) {
    return this.http.delete(`${this.API_URI}/noticias/${id}`); /*peticion para eliminar una noticia dado un id*/
  }

  updateNoticia( id: string|number, updatedNoticia: Noticia): Observable<Noticia> {
    return this.http.put(`${this.API_URI}/noticias/${id}`,updatedNoticia); /*actualizad una noticia*/
  }

  getNoticiaSeccion(seccion: string) {
    return this.http.get(`${this.API_URI}/noticias/seccion/${seccion}`); /*recoger la lista de noticias dado una seccion (no se usa)*/
  }
}
