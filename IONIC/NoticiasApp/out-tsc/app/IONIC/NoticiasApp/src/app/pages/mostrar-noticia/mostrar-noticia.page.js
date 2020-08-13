import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute, Router } from "@angular/router";
let MostrarNoticiaPage = class MostrarNoticiaPage {
    constructor(noticiasService, router, activatedRoute) {
        this.noticiasService = noticiasService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /*noticia vacia que solo se usa para lectura de vacio*/
        this.temp = {
            id: 0,
            imagen: "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png",
            titulo: "",
            subtitulo: "",
            seccion: "",
            autor: "",
            fecha: new Date(),
            contenido: ""
        };
        /*noticia inicializada*/
        this.noticia = {
            id: 0,
            imagen: "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png",
            titulo: "",
            subtitulo: "",
            seccion: "",
            autor: "",
            fecha: new Date(),
            contenido: ""
        };
    }
    ngOnInit() {
        this.getNoticia(); /*coje la noticia cogiendo el id de los params*/
    }
    getNoticia() {
        const params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.noticiasService.getNoticia(params.id)
                .subscribe(res => {
                console.log(res);
                this.noticia = res;
                console.log(this.noticia);
                if (this.noticia.imagen == "") { /*si no hay imagen muestra un "sin imagen"*/
                    this.noticia.imagen = "http://paddlevan.es/wp-content/uploads/2017/08/sinimagen.png";
                }
            }, err => console.error(err));
        }
    }
    /*refrescar la noticia por si se actualiza la informacion*/
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.noticia = this.temp;
            this.getNoticia();
            event.target.complete();
        }, 2000);
    }
};
MostrarNoticiaPage = tslib_1.__decorate([
    Component({
        selector: 'app-mostrar-noticia',
        templateUrl: './mostrar-noticia.page.html',
        styleUrls: ['./mostrar-noticia.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NoticiasService, Router, ActivatedRoute])
], MostrarNoticiaPage);
export { MostrarNoticiaPage };
//# sourceMappingURL=mostrar-noticia.page.js.map