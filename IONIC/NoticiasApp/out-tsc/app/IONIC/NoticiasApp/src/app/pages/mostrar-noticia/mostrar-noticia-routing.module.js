import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MostrarNoticiaPage } from './mostrar-noticia.page';
const routes = [
    {
        path: '',
        component: MostrarNoticiaPage
    }
];
let MostrarNoticiaPageRoutingModule = class MostrarNoticiaPageRoutingModule {
};
MostrarNoticiaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MostrarNoticiaPageRoutingModule);
export { MostrarNoticiaPageRoutingModule };
//# sourceMappingURL=mostrar-noticia-routing.module.js.map