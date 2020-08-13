import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActualidadPage } from './actualidad.page';
const routes = [
    {
        path: '',
        component: ActualidadPage
    }
];
let ActualidadPageRoutingModule = class ActualidadPageRoutingModule {
};
ActualidadPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ActualidadPageRoutingModule);
export { ActualidadPageRoutingModule };
//# sourceMappingURL=actualidad-routing.module.js.map