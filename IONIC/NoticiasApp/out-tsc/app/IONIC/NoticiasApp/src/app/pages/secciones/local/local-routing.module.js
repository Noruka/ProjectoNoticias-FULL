import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalPage } from './local.page';
const routes = [
    {
        path: '',
        component: LocalPage
    }
];
let LocalPageRoutingModule = class LocalPageRoutingModule {
};
LocalPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LocalPageRoutingModule);
export { LocalPageRoutingModule };
//# sourceMappingURL=local-routing.module.js.map