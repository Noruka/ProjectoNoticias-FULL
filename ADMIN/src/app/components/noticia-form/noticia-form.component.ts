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

  noticia: Noticia = {
    id: 0,
    imagen: "",
    titulo: "",
    subtitulo: "",
    autor: "",
    fecha: new Date(),
    contenido: ""
  };

  edit: boolean = false;

  @HostBinding('class') classes = 'row';
  constructor(private noticiasService: NoticiasService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.noticiasService.getNoticia(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.noticia = res;
            this.edit = true;
          },err => console.error(err)
        ) }
  }

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
