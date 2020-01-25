import { Router } from 'express';
import noticiasController from '../controllers/noticiasController';
class NoticiasRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', noticiasController.list);
        /*(get)localhost:PUERTO(3000)/api/noticias -> el controlador devolvera un json con la lista de noticias entera*/

        this.router.get('/seccion/:seccion', noticiasController.getListSeccion);
        /*(get)localhost:PUERTO(3000)/api/noticias/seccion/:idSeccion -> el controlador devolvera un json con una lista de noticias de una seccion en particular*/

        this.router.get('/:id', noticiasController.getOne);
        /*(get)localhost:PUERTO(3000)/api/noticias/:id -> el controlador devolvera una noticia dado un id*/

        this.router.get('/comentarios/:id', noticiasController.getComentarios);
        /*(get)localhost:PUERTO(3000)/api/noticias/comentarios/:id -> el controlador devolvera una lista de comentarios dado un id de noticia*/

        this.router.post('/comentarios/', noticiasController.postComentario);
        /*(post)localhost:PUERTO(3000)/api/noticias/comentarios/ -> el controlador cojera el comentario enviado y la guardara en la base de datos*/

        this.router.post('/', noticiasController.create);
        /*(post)localhost:PUERTO(3000)/api/noticias/ -> el controlador cojera la noticia enviada y la guardara en la base datos*/

        this.router.delete('/:id', noticiasController.delete);
        /*(delete)localhost:PUERTO(3000)/api/noticias/:id -> el controlador borrara de la base de datos la noticia dado un id*/

        this.router.put('/:id', noticiasController.update);
        /*(put)localhost:PUERTO(3000)/api/noticia/:id -> el controlador actualizara la información de una noticia dado un id*/
}
}
const noticiasRoutes = new NoticiasRoutes();
export default noticiasRoutes.router;
