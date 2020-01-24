import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {ComentariosComponent} from "./comentarios/comentarios.component";
import {FormsModule} from "@angular/forms";



@NgModule({
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
export class ComponentsModule { }
