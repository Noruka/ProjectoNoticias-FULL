import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocalPageRoutingModule } from './local-routing.module';
import { LocalPage } from './local.page';
import { ComponentsModule } from "../../../components/components.module";
let LocalPageModule = class LocalPageModule {
};
LocalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LocalPageRoutingModule,
            ComponentsModule
        ],
        declarations: [LocalPage]
    })
], LocalPageModule);
export { LocalPageModule };
//# sourceMappingURL=local.module.js.map