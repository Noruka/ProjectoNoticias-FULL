import {Component, HostBinding, OnInit} from '@angular/core';
import {Noticia} from "../../models/Noticia";
import {NoticiasService} from "../../services/noticias.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent implements OnInit {

  secciones = [
    'Actualidad',
    'Politica',
    'Economia',
    'Local',
    'Deporte'
  ]; /*array de secciones para el selector de secciones. Estas secciones tienen que ser iguales para cuando se llaman en ionic*/

  noticia: Noticia = {
    id: 0,
    imagen: "",
    titulo: "",
    subtitulo: "",
    seccion: "",
    autor: "",
    fecha: new Date(),
    contenido: ""
  }; /*una noticia inicializada*/

  edit = false; /*esto es por si se ha dado al boton de edit en una noticia*/

  @HostBinding('class') classes = 'row';

  constructor(private noticiasService: NoticiasService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  /*al iniciarse coje la noticia de la base de datos y carga la informacion si es que hay (esto en el caso de que si en params.id hay algo)*/

  /*si no simplemente es un formulario vacio para crear noticias*/
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.noticiasService.getNoticia(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.noticia = res;
            this.edit = true;
          }, err => console.error(err)
        )
    }
  }

  /*funcion que guarda la noticia y te devuelve a la pagina principal*/
  saveNewNoticia() {
    delete this.noticia.fecha;
    delete this.noticia.id;
    this.noticiasService.saveNoticia(this.noticia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/noticias']);
        },
        err => console.error(err)
      )
  }

  /*funcion que actualiza la noticia en la base de datos con la informacion de los formularios*/
  updateNoticia() {
    delete this.noticia.fecha;
    this.noticiasService.updateNoticia(this.noticia.id, this.noticia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/noticias']);
        },
        err => console.error(err)
      )
  }
}
