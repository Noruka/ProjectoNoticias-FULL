import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoticiaListComponent} from "./components/noticia-list/noticia-list.component";
import {NoticiaFormComponent} from "./components/noticia-form/noticia-form.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/noticias',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    component: NoticiaListComponent
  },
  {
    path: 'noticias/add',
    component: NoticiaFormComponent
  },
  {
    path: 'noticias/edit/:id',
    component: NoticiaFormComponent
  }
];
/*las rutas de la pagina de admin, para cargar los componentes*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
