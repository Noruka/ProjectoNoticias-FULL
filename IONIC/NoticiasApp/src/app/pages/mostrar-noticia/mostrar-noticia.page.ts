import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';
import {Noticia} from "../../models/Noticia";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mostrar-noticia',
  templateUrl: './mostrar-noticia.page.html',
  styleUrls: ['./mostrar-noticia.page.scss'],
})
export class MostrarNoticiaPage implements OnInit {

    temp: Noticia = {
        id: 0,
        imagen: "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png",
        titulo: "",
        subtitulo: "",
        seccion: "",
        autor: "",
        fecha: new Date(),
        contenido: ""
    };

    noticia: Noticia = {
        id: 0,
        imagen: "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png",
        titulo: "",
        subtitulo: "",
        seccion: "",
        autor: "",
        fecha: new Date(),
        contenido: ""
    };

  constructor(private noticiasService: NoticiasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getNoticia();

  }

  getNoticia(){
      const params = this.activatedRoute.snapshot.params;
      if (params.id) {
          this.noticiasService.getNoticia(params.id)
              .subscribe(
                  res => {
                      console.log(res);
                      this.noticia = res;
                      console.log(this.noticia);
                      if (this.noticia.imagen == ""){
                          this.noticia.imagen = "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png";
                      }
                  },err => console.error(err)
              ) }
  }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');

            this.noticia = this.temp;

            this.getNoticia();

            event.target.complete();
        }, 2000);
    }



}
