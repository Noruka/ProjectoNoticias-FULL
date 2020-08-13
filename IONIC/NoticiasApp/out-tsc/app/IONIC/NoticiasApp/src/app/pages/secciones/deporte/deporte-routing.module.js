import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeportePage } from './deporte.page';
const routes = [
    {
        path: '',
        component: DeportePage
    }
];
let DeportePageRoutingModule = class DeportePageRoutingModule {
};
DeportePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DeportePageRoutingModule);
export { DeportePageRoutingModule };
//# sourceMappingURL=deporte-routing.module.js.map