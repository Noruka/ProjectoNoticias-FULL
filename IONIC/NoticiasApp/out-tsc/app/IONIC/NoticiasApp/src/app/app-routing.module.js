import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'mostrar-noticia',
        loadChildren: () => import('./pages/mostrar-noticia/mostrar-noticia.module').then(m => m.MostrarNoticiaPageModule)
    },
    {
        path: 'mostrar-noticia/:id',
        loadChildren: () => import('./pages/mostrar-noticia/mostrar-noticia.module').then(m => m.MostrarNoticiaPageModule)
    },
    {
        path: 'actualidad',
        loadChildren: () => import('./pages/secciones/actualidad/actualidad.module').then(m => m.ActualidadPageModule)
    },
    {
        path: 'politica',
        loadChildren: () => import('./pages/secciones/politica/politica.module').then(m => m.PoliticaPageModule)
    },
    {
        path: 'deporte',
        loadChildren: () => import('./pages/secciones/deporte/deporte.module').then(m => m.DeportePageModule)
    },
    {
        path: 'economia',
        loadChildren: () => import('./pages/secciones/economia/economia.module').then(m => m.EconomiaPageModule)
    },
    {
        path: 'local',
        loadChildren: () => import('./pages/secciones/local/local.module').then(m => m.LocalPageModule)
    },
]; /*rutas de la app*/
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map