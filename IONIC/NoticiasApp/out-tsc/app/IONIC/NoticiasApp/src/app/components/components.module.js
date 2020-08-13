import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { ComentariosComponent } from "./comentarios/comentarios.component";
import { FormsModule } from "@angular/forms";
/*exportacion y declaracion de mis componentes como la importacion de otros componentes necesarios.*/
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HeaderComponent,
            MenuComponent,
            ComentariosComponent
        ],
        imports: [
            CommonModule,
            IonicModule,
            RouterModule,
            FormsModule
        ],
        exports: [
            HeaderComponent,
            MenuComponent,
            ComentariosComponent
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map