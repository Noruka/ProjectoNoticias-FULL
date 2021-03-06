import * as tslib_1 from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { DataService } from "../../services/data.service";
import { IonInfiniteScroll, MenuController } from "@ionic/angular";
let InicioPage = class InicioPage {
    constructor(noticiasService, menuCtrl, dataService) {
        this.noticiasService = noticiasService;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.mostrar = 0; /*variable para el infinite scroll para saber cuantos elementos mostrar*/
        this.contador = 0; /*contador para saber que noticia hay que leer siguiente de la lista*/
        this.data = []; /*array de noticias que se estan mostrando en el infinite scroll*/
    }
    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts(); /* carga las opciones del menu */
        this.getNoticias(); /*carga la lista de noticias de la api*/
        this.loadData(null); /*carga 5 elementos al infinite scroll*/
    }
    /*funcion para refrescar la pagina completamente*/
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            /*Borra las listas y resetea la informacion para cargar la pagina como si la iniciaras de 0*/
            this.noticias = [];
            this.data = [];
            this.contador = 0;
            this.mostrar = 0;
            this.getNoticias(); /*vuelve a cargar la lista de noticias de la api. Esta funcion realmente la uso por si he eliminado o modificado una noticia*/
            this.loadData(null); /*carga elementos iniciales*/
            event.target.complete(); /*deja de ejecutar la animacion del infinite scroll*/
        }, 2000);
    }
    /*funcion para cargar la informacion al infinite scroll*/
    loadData(event) {
        console.log('Cargando siguientes ...');
        setTimeout(() => {
            this.getNoticias(); /*por si acaso refresca la lista local de noticias*/
            /*Aqui comparo las noticias que estoy mostrando (data) y las que me faltan por mostrar(noticias).
             Si las noticias que estoy mostrando(data) es mayor o igual a la lista de todas las noticias(noticias)
             entonces desactivara el infinite scroll. En caso de que quieras cargar noticias que añadas apartir de este momento
             puedes refrescar la pagina arriba del todo y pues se recargara la lista local*/
            if (this.data.length > this.noticias.length) {
                event.target.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            /*si la diferencia de la lista total, y la lista que estas mostrando es mayor o igual a 5, entonces se mostraran 5
            * si es menos entonces se mostrara la diferencia. Asi evito las cards vacias*/
            if (this.noticias.length - this.data.length >= 5) {
                this.mostrar = 5;
            }
            else {
                this.mostrar = this.noticias.length - this.data.length;
            }
            /*Aqui creo el nuevo array con la longitud de noticias que voy a mostrar. Si son 5 o si son menos se especifica aqui*/
            const nuevoArr = Array(this.mostrar);
            for (let i = 0; i < nuevoArr.length; i++) {
                if (this.contador < this.noticias.length) { /*comprueba que aun faltan noticias por mostrar*/
                    nuevoArr[i] = this.noticias[this.contador];
                    this.contador++;
                }
            }
            this.data.push(...nuevoArr);
            event.target.complete();
        }, 1000);
    }
    getNoticias() {
        this.noticiasService.getNoticias().subscribe(res => {
            this.noticias = res;
        }, err => console.error(err));
    }
};
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], InicioPage.prototype, "infiniteScroll", void 0);
InicioPage = tslib_1.__decorate([
    Component({
        selector: 'app-inicio',
        templateUrl: './inicio.page.html',
        styleUrls: ['./inicio.page.scss'],
    }),
    tslib_1.__param(2, Inject(DataService)),
    tslib_1.__metadata("design:paramtypes", [NoticiasService, MenuController, DataService])
], InicioPage);
export { InicioPage };
//# sourceMappingURL=inicio.page.js.map