import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import noticiasRoutes from './routes/noticiasRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000); /*Puerto del servidor de la API*/
        this.app.use(morgan('dev')); /*Usar dependencias*/
        this.app.use(cors());/*Usar dependencias*/
        this.app.use(express.json());/*Usar dependencias*/
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);/*localhost:PUERTO(3000)/ -> lo he cambiado para que te redirija al servidor y pagina de angular admin */
        this.app.use('/api/noticias', noticiasRoutes); /*localhost:PUERTO(3000)/api/noticias/x -> las peticiones a la parte de la api se haran aqui
         y noticiasRoutes manejara las peticiones a partir de esta url */
    }
    start(): void {
        this.app.listen(this.app.get('port')), () => {
            console.log('Server on port', this.app.get('port')); /*Pone al servidor en modo escucha en el puerto que le hemos asignado*/
        }
    }
}
const server = new Server();
server.start(); /*Empieza el server*/
