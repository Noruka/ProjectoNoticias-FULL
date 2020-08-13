import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MostrarNoticiaPageRoutingModule } from './mostrar-noticia-routing.module';
import { MostrarNoticiaPage } from './mostrar-noticia.page';
import { ComponentsModule } from "../../components/components.module";
let MostrarNoticiaPageModule = class MostrarNoticiaPageModule {
};
MostrarNoticiaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MostrarNoticiaPageRoutingModule,
            ComponentsModule
        ],
        declarations: [MostrarNoticiaPage]
    })
], MostrarNoticiaPageModule);
export { MostrarNoticiaPageModule };
//# sourceMappingURL=mostrar-noticia.module.js.map