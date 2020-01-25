"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noticiasController_1 = __importDefault(require("../controllers/noticiasController"));
class NoticiasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', noticiasController_1.default.list);
        /*(get)localhost:PUERTO(3000)/api/noticias -> el controlador devolvera un json con la lista de noticias entera*/
        this.router.get('/seccion/:seccion', noticiasController_1.default.getListSeccion);
        /*(get)localhost:PUERTO(3000)/api/noticias/seccion/:idSeccion -> el controlador devolvera un json con una lista de noticias de una seccion en particular*/
        this.router.get('/:id', noticiasController_1.default.getOne);
        /*(get)localhost:PUERTO(3000)/api/noticias/:id -> el controlador devolvera una noticia dado un id*/
        this.router.get('/comentarios/:id', noticiasController_1.default.getComentarios);
        /*(get)localhost:PUERTO(3000)/api/noticias/comentarios/:id -> el controlador devolvera una lista de comentarios dado un id de noticia*/
        this.router.post('/comentarios/', noticiasController_1.default.postComentario);
        /*(post)localhost:PUERTO(3000)/api/noticias/comentarios/ -> el controlador cojera el comentario enviado y la guardara en la base de datos*/
        this.router.post('/', noticiasController_1.default.create);
        /*(post)localhost:PUERTO(3000)/api/noticias/ -> el controlador cojera la noticia enviada y la guardara en la base datos*/
        this.router.delete('/:id', noticiasController_1.default.delete);
        /*(delete)localhost:PUERTO(3000)/api/noticias/:id -> el controlador borrara de la base de datos la noticia dado un id*/
        this.router.put('/:id', noticiasController_1.default.update);
        /*(put)localhost:PUERTO(3000)/api/noticia/:id -> el controlador actualizara la información de una noticia dado un id*/
    }
}
const noticiasRoutes = new NoticiasRoutes();
exports.default = noticiasRoutes.router;
