import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EconomiaPage } from './economia.page';
const routes = [
    {
        path: '',
        component: EconomiaPage
    }
];
let EconomiaPageRoutingModule = class EconomiaPageRoutingModule {
};
EconomiaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EconomiaPageRoutingModule);
export { EconomiaPageRoutingModule };
//# sourceMappingURL=economia-routing.module.js.map