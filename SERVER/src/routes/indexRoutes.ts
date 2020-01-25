import { Router } from 'express';
import { indexController } from '../controllers/indexController';
class IndexRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', indexController.index); /*(get)localhost:PUERTO(3000)/ -> lo he cambiado para que te redirija al servidor y pagina de angular admin */
    }}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
