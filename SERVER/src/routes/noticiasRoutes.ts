import { Router } from 'express';
import noticiasController from '../controllers/noticiasController';
class NoticiasRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', noticiasController.list);
        this.router.get('/seccion/:seccion', noticiasController.getListSeccion);
        this.router.get('/:id', noticiasController.getOne);
        this.router.post('/', noticiasController.create);
        this.router.delete('/:id', noticiasController.delete);
        this.router.put('/:id', noticiasController.update);
    }
}
const noticiasRoutes = new NoticiasRoutes();
export default noticiasRoutes.router;
