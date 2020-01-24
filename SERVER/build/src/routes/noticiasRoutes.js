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
        this.router.get('/seccion/:seccion', noticiasController_1.default.getListSeccion);
        this.router.get('/:id', noticiasController_1.default.getOne);
        this.router.get('/comentarios/:id', noticiasController_1.default.getComentarios);
        this.router.post('/comentarios/', noticiasController_1.default.postComentario);
        this.router.post('/', noticiasController_1.default.create);
        this.router.delete('/:id', noticiasController_1.default.delete);
        this.router.put('/:id', noticiasController_1.default.update);
    }
}
const noticiasRoutes = new NoticiasRoutes();
exports.default = noticiasRoutes.router;
