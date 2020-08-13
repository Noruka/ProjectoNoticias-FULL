import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let NoticiasService = class NoticiasService {
    constructor(http) {
        this.http = http;
        /*lo mismo que en la pagina de angular. funciones que devuelven json's de la api*/
        //API_URI = 'http://170.253.46.76:3000/api';
        //API_URI = 'http://192.168.1.134:3000/api';
        this.API_URI = 'http://localhost:3000/api';
    }
    getNoticias() {
        return this.http.get(`${this.API_URI}/noticias`);
    }
    getNoticia(id) {
        return this.http.get(`${this.API_URI}/noticias/${id}`);
    }
    getNoticiaSeccion(seccion) {
        return this.http.get(`${this.API_URI}/noticias/seccion/${seccion}`);
    }
    getComentarios(id) {
        return this.http.get(`${this.API_URI}/noticias/comentarios/${id}`);
    }
    saveComentario(comentario) {
        return this.http.post(`${this.API_URI}/noticias/comentarios/`, comentario);
    }
};
NoticiasService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], NoticiasService);
export { NoticiasService };
//# sourceMappingURL=noticias.service.js.map