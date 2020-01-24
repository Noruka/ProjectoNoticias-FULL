import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mostrar-noticia',
    loadChildren: () => import('./pages/mostrar-noticia/mostrar-noticia.module').then( m => m.MostrarNoticiaPageModule)
  },
  {
    path: 'mostrar-noticia/:id',
    loadChildren: () => import('./pages/mostrar-noticia/mostrar-noticia.module').then( m => m.MostrarNoticiaPageModule)
  },
  {
    path: 'actualidad',
    loadChildren: () => import('./pages/secciones/actualidad/actualidad.module').then( m => m.ActualidadPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./pages/secciones/politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'deporte',
    loadChildren: () => import('./pages/secciones/deporte/deporte.module').then( m => m.DeportePageModule)
  },
  {
    path: 'economia',
    loadChildren: () => import('./pages/secciones/economia/economia.module').then( m => m.EconomiaPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/secciones/local/local.module').then( m => m.LocalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
