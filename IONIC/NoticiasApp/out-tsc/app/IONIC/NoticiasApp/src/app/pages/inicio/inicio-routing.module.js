import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
const routes = [
    {
        path: '',
        component: InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InicioPageRoutingModule);
export { InicioPageRoutingModule };
//# sourceMappingURL=inicio-routing.module.js.map