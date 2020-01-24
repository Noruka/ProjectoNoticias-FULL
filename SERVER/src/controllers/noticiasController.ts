import { Request, Response} from "express";
import pool from '../../database';

class NoticiasController {

    public async list (req: Request, res: Response) {
        const noticias = await pool.then((r:any) => r.query('SELECT * FROM noticias ORDER BY fecha DESC'));
        res.json(noticias);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const noticias = await pool.then((r: any) => r.query('SELECT * FROM noticias WHERE id = ?', [id]));
        if (noticias.length > 0) {
            return res.json(noticias[0]);
        }
        res.status(404).json({text: 'La Noticia no existe'});
    }

    public async getListSeccion (req: Request, res: Response) {
        const { seccion } = req.params;
        const noticias = await pool.then((r: any) => r.query('SELECT * FROM noticias WHERE seccion = ? ORDER BY fecha DESC', [seccion]));
        return res.json(noticias);
    }

    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO noticias set ?',[req.body]));
        res.json({message: 'Noticia guardada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM noticias WHERE id = ?',[id]));
        res.json({message: 'La Noticia ha sido eliminada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE noticias set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'La Noticia se ha actualizado'});
    }

    public async getComentarios (req: Request, res: Response) {
        const { id } = req.params;
        const comentarios = await pool.then((r: any) => r.query('SELECT * FROM comentarios WHERE noticiaId = ?', [id]));
        return res.json(comentarios);
    }

    public async postComentario (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO comentarios set ?',[req.body]));
        res.json({message: 'Comentario guardado'});
    }

}

const noticiasController = new NoticiasController();
export default noticiasController;
