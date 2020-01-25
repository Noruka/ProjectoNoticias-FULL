"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const noticiasRoutes_1 = __importDefault(require("./routes/noticiasRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); /*Puerto del servidor de la API*/
        this.app.use(morgan_1.default('dev')); /*Usar dependencias*/
        this.app.use(cors_1.default()); /*Usar dependencias*/
        this.app.use(express_1.default.json()); /*Usar dependencias*/
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default); /*localhost:PUERTO(3000)/ -> lo he cambiado para que te redirija al servidor y pagina de angular admin */
        this.app.use('/api/noticias', noticiasRoutes_1.default); /*localhost:PUERTO(3000)/api/noticias/x -> las peticiones a la parte de la api se haran aqui
         y noticiasRoutes manejara las peticiones a partir de esta url */
    }
    start() {
        this.app.listen(this.app.get('port')), () => {
            console.log('Server on port', this.app.get('port')); /*Pone al servidor en modo escucha en el puerto que le hemos asignado*/
        };
    }
}
const server = new Server();
server.start(); /*Empieza el server*/
