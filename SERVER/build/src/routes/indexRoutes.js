"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); /*(get)localhost:PUERTO(3000)/ -> lo he cambiado para que te redirija al servidor y pagina de angular admin */
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
