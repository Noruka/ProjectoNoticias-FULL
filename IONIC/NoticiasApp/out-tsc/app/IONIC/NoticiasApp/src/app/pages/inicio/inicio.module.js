import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { ComponentsModule } from "../../components/components.module";
let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InicioPageRoutingModule,
            ComponentsModule
        ],
        declarations: [InicioPage]
    })
], InicioPageModule);
export { InicioPageModule };
//# sourceMappingURL=inicio.module.js.map