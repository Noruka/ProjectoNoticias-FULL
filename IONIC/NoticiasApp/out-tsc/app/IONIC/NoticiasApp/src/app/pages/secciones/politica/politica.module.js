import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PoliticaPageRoutingModule } from './politica-routing.module';
import { PoliticaPage } from './politica.page';
import { ComponentsModule } from "../../../components/components.module";
let PoliticaPageModule = class PoliticaPageModule {
};
PoliticaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PoliticaPageRoutingModule,
            ComponentsModule
        ],
        declarations: [PoliticaPage]
    })
], PoliticaPageModule);
export { PoliticaPageModule };
//# sourceMappingURL=politica.module.js.map