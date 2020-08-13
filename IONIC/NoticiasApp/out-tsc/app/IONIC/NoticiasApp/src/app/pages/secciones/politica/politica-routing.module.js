import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoliticaPage } from './politica.page';
const routes = [
    {
        path: '',
        component: PoliticaPage
    }
];
let PoliticaPageRoutingModule = class PoliticaPageRoutingModule {
};
PoliticaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PoliticaPageRoutingModule);
export { PoliticaPageRoutingModule };
//# sourceMappingURL=politica-routing.module.js.map