import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {Comentario} from "../../models/Comentario";
import {ActivatedRoute, Router} from "@angular/router";
import {NoticiasService} from "../../services/noticias.service";
import {Noticia} from "../../models/Noticia";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {

    mostrar = 0;
    contador = 0;
    noticiaId = "";

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

  comentario: Comentario = {
    id: 0,
    noticiaId: "",
    nombre: "",
    correo: "",
    comentario: ""
  };

    comentarios: Comentario[];

    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    data: Comentario[] = [];

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
              },err => console.error(err)
          )
    }

    this.getComentarios()

  }

  getComentarios(){
      this.noticiasService.getComentarios(this.noticia.id+"").subscribe(
          res => {
              console.log(this.comentario.noticiaId);
              this.comentarios = res;
              console.log(res);
          },
          err => console.error(err)
      );
  }

  saveNewComentario() {
      this.comentario.noticiaId = this.noticia.id+"";
    this.noticiasService.saveComentario(this.comentario)
        .subscribe(
            res => {

              console.log(res);
            },
            err => console.error(err)
        )
  }

    loadData(event) {
        console.log('Cargando siguientes ...');
        setTimeout(() => {

            this.getComentarios();

            if ( this.data.length > this.comentarios.length ) {
                event.target.complete();
                console.log("data length bigger than comentarios length")
                this.infiniteScroll.disabled = true;
                return;
            }

            if (this.comentarios.length - this.data.length >= 5) {
                this.mostrar = 5;
            } else {
                this.mostrar = this.comentarios.length - this.data.length;
            }

            const nuevoArr = Array(this.mostrar);
            for (let i = 0; i < nuevoArr.length; i++) {
                if (this.contador < this.comentarios.length) {
                    nuevoArr[i] = this.comentarios[this.contador];
                    this.contador++;
                }
            }
            this.data.push( ...nuevoArr);
            event.target.complete();

        }, 1000 );
    }

}
