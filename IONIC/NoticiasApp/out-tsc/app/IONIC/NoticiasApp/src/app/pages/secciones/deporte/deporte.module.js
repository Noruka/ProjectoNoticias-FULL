import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeportePageRoutingModule } from './deporte-routing.module';
import { DeportePage } from './deporte.page';
import { ComponentsModule } from "../../../components/components.module";
let DeportePageModule = class DeportePageModule {
};
DeportePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DeportePageRoutingModule,
            ComponentsModule
        ],
        declarations: [DeportePage]
    })
], DeportePageModule);
export { DeportePageModule };
//# sourceMappingURL=deporte.module.js.map