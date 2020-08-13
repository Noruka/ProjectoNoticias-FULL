import * as tslib_1 from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from "@ionic/angular";
import { DataService } from "../../../services/data.service";
import { NoticiasService } from "../../../services/noticias.service";
let ActualidadPage = class ActualidadPage {
    constructor(noticiasService, menuCtrl, dataService) {
        this.noticiasService = noticiasService;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        /*lo mismo que en inicio pero esta vez mostrando solo una seccion*/
        this.seccion = "Actualidad"; /*config de que seccion mostrar*/
        this.pipo = 0;
        this.contador = 0;
        this.data = [];
    }
    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts();
        this.getNoticiaSeccion(this.seccion);
        this.loadData(null);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.noticias = [];
            this.data = [];
            this.contador = 0;
            this.pipo = 0;
            this.getNoticiaSeccion(this.seccion); /*coge la lista de noticias de la seccion especificada, lo mismo para cada pagina de seccion*/
            this.loadData(null);
            event.target.complete();
        }, 2000);
    }
    loadData(event) {
        console.log('Cargando siguientes ...');
        setTimeout(() => {
            this.getNoticiaSeccion(this.seccion);
            if (this.data.length > this.noticias.length) {
                event.target.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            if (this.noticias.length - this.data.length >= 5) {
                this.pipo = 5;
            }
            else {
                this.pipo = this.noticias.length - this.data.length;
            }
            const nuevoArr = Array(this.pipo);
            for (let i = 0; i < 5; i++) {
                if (this.contador < this.noticias.length) {
                    nuevoArr[i] = this.noticias[this.contador];
                    this.contador++;
                }
            }
            this.data.push(...nuevoArr);
            event.target.complete();
        }, 1000);
    }
    getNoticiaSeccion(seccion) {
        this.noticiasService.getNoticiaSeccion(seccion).subscribe(res => {
            console.log(res);
            // @ts-ignore
            this.noticias = res;
        }, error => console.error(error));
    }
};
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], ActualidadPage.prototype, "infiniteScroll", void 0);
ActualidadPage = tslib_1.__decorate([
    Component({
        selector: 'app-actualidad',
        templateUrl: './actualidad.page.html',
        styleUrls: ['./actualidad.page.scss'],
    }),
    tslib_1.__param(2, Inject(DataService)),
    tslib_1.__metadata("design:paramtypes", [NoticiasService, MenuController, DataService])
], ActualidadPage);
export { ActualidadPage };
//# sourceMappingURL=actualidad.page.js.map