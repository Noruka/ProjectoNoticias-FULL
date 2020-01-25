import { Request, Response} from "express";
import pool from '../../database';

class NoticiasController {

    public async list (req: Request, res: Response) {
        const noticias = await pool.then((r:any) => r.query('SELECT * FROM noticias ORDER BY fecha DESC'));
        res.json(noticias); /*Devuelve un json con la lista entera de noticias*/
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const noticias = await pool.then((r: any) => r.query('SELECT * FROM noticias WHERE id = ?', [id]));
        if (noticias.length > 0) {
            return res.json(noticias[0]);
        }
        res.status(404).json({text: 'La Noticia no existe'});
        /*Devuelve un json con una noticia dado un id*/
    }

    public async getListSeccion (req: Request, res: Response) {
        const { seccion } = req.params;
        const noticias = await pool.then((r: any) => r.query('SELECT * FROM noticias WHERE seccion = ? ORDER BY fecha DESC', [seccion]));
        return res.json(noticias);
        /*Devuelve un json con una lista de noticias dado una seccion*/
    }

    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO noticias set ?',[req.body]));
        res.json({message: 'Noticia guardada'});
        /*envia un json con una noticia y la guarda en la base de datos*/
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM noticias WHERE id = ?',[id]));
        res.json({message: 'La Noticia ha sido eliminada'});
        /*dado un id borra una noticia de la base de datos*/
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE noticias set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'La Noticia se ha actualizado'});
        /*dado un json con una noticia actualiza la informacion de la misma en la base de datos*/
    }

    public async getComentarios (req: Request, res: Response) {
        const { id } = req.params;
        const comentarios = await pool.then((r: any) => r.query('SELECT * FROM comentarios WHERE noticiaId = ?', [id]));
        return res.json(comentarios);
        /*dado un id de noticia devuelve un json con una lista de comentarios de esa noticia*/
    }

    public async postComentario (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO comentarios set ?',[req.body]));
        res.json({message: 'Comentario guardado'});
        /*dado un json de comentario guarda ese comentario en la base de datos*/
    }

}

const noticiasController = new NoticiasController();
export default noticiasController;
