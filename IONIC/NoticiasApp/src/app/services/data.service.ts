import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Componente} from "../interfaces/componente";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json'); /*servicio que devuelve la lista para el menu*/
  }
}
