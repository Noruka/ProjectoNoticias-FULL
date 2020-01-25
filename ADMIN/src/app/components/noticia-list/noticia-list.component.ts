import {Component, HostBinding, OnInit} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service";

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  noticias: any = []; /*array vacio tipo any llamado noticias para guardar la lista de noticias*/

  @HostBinding('class') classes = 'row';
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.getNoticias(); /*al iniciarse el componente cojer la lista de noticias*/
  }

  getNoticias() {
    this.noticiasService.getNoticias().subscribe(
      res => {
        this.noticias = res; /*la funcion llama a la funcion en NoticiasService y devuelve un json con una lista de noticias. Eso luego se guarda en el array local*/
      },
      err => console.error(err) /*si hay algun error lo muestra por consola*/
    )
  }

  deleteNoticia( id: string ) {
    this.noticiasService.deleteNoticia( id ).subscribe(
      res => {
        console.log(res); /*cuando se presiona el boton de borrar noticia en la pagina principal, borra la noticia de la base de datos y refresca la lista.*/
        this.getNoticias();
      },
      err => console.log(err)
    )
  }

}
