import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form.component';
import { NoticiaListComponent } from './components/noticia-list/noticia-list.component';
import {NoticiasService} from "./services/noticias.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

/*exportacion de componentes y servicios*/

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoticiaFormComponent,
    NoticiaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
