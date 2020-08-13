import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EconomiaPageRoutingModule } from './economia-routing.module';
import { EconomiaPage } from './economia.page';
import { ComponentsModule } from "../../../components/components.module";
let EconomiaPageModule = class EconomiaPageModule {
};
EconomiaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EconomiaPageRoutingModule,
            ComponentsModule
        ],
        declarations: [EconomiaPage]
    })
], EconomiaPageModule);
export { EconomiaPageModule };
//# sourceMappingURL=economia.module.js.map