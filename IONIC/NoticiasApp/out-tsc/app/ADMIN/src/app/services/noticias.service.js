import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
let NoticiasService = class NoticiasService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api'; /*la ruta default de la api*/
    }
    getNoticias() {
        return this.http.get(`${this.API_URI}/noticias`); /*enviarle una peticion para recojer la lista de noticias*/
    }
    getNoticia(id) {
        return this.http.get(`${this.API_URI}/noticias/${id}`); /*enviarle una peticion para cojer una noticia dado un id*/
    }
    saveNoticia(noticia) {
        return this.http.post(`${this.API_URI}/noticias`, noticia); /*peticion para guardar una noticia enviandosela*/
    }
    deleteNoticia(id) {
        return this.http.delete(`${this.API_URI}/noticias/${id}`); /*peticion para eliminar una noticia dado un id*/
    }
    updateNoticia(id, updatedNoticia) {
        return this.http.put(`${this.API_URI}/noticias/${id}`, updatedNoticia); /*actualizad una noticia*/
    }
    getNoticiaSeccion(seccion) {
        return this.http.get(`${this.API_URI}/noticias/seccion/${seccion}`); /*recoger la lista de noticias dado una seccion (no se usa)*/
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