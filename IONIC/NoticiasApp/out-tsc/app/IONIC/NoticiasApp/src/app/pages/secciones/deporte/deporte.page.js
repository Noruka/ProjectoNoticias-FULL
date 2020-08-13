import * as tslib_1 from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from "@ionic/angular";
import { NoticiasService } from "../../../services/noticias.service";
import { DataService } from "../../../services/data.service";
let DeportePage = class DeportePage {
    constructor(noticiasService, menuCtrl, dataService) {
        this.noticiasService = noticiasService;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.seccion = "Deporte";
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
            this.getNoticiaSeccion(this.seccion);
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
], DeportePage.prototype, "infiniteScroll", void 0);
DeportePage = tslib_1.__decorate([
    Component({
        selector: 'app-deporte',
        templateUrl: './deporte.page.html',
        styleUrls: ['./deporte.page.scss'],
    }),
    tslib_1.__param(2, Inject(DataService)),
    tslib_1.__metadata("design:paramtypes", [NoticiasService, MenuController, DataService])
], DeportePage);
export { DeportePage };
//# sourceMappingURL=deporte.page.js.map