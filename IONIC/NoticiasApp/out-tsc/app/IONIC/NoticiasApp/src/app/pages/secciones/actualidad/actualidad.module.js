import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActualidadPageRoutingModule } from './actualidad-routing.module';
import { ActualidadPage } from './actualidad.page';
import { ComponentsModule } from "../../../components/components.module";
let ActualidadPageModule = class ActualidadPageModule {
};
ActualidadPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ActualidadPageRoutingModule,
            ComponentsModule
        ],
        declarations: [ActualidadPage]
    })
], ActualidadPageModule);
export { ActualidadPageModule };
//# sourceMappingURL=actualidad.module.js.map