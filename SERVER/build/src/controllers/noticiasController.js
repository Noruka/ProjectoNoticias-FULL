"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class NoticiasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const noticias = yield database_1.default.then((r) => r.query('SELECT * FROM noticias ORDER BY fecha DESC'));
            res.json(noticias); /*Devuelve un json con la lista entera de noticias*/
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const noticias = yield database_1.default.then((r) => r.query('SELECT * FROM noticias WHERE id = ?', [id]));
            if (noticias.length > 0) {
                return res.json(noticias[0]);
            }
            res.status(404).json({ text: 'La Noticia no existe' });
            /*Devuelve un json con una noticia dado un id*/
        });
    }
    getListSeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { seccion } = req.params;
            const noticias = yield database_1.default.then((r) => r.query('SELECT * FROM noticias WHERE seccion = ? ORDER BY fecha DESC', [seccion]));
            return res.json(noticias);
            /*Devuelve un json con una lista de noticias dado una seccion*/
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO noticias set ?', [req.body]));
            res.json({ message: 'Noticia guardada' });
            /*envia un json con una noticia y la guarda en la base de datos*/
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM noticias WHERE id = ?', [id]));
            res.json({ message: 'La Noticia ha sido eliminada' });
            /*dado un id borra una noticia de la base de datos*/
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE noticias set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'La Noticia se ha actualizado' });
            /*dado un json con una noticia actualiza la informacion de la misma en la base de datos*/
        });
    }
    getComentarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const comentarios = yield database_1.default.then((r) => r.query('SELECT * FROM comentarios WHERE noticiaId = ?', [id]));
            return res.json(comentarios);
            /*dado un id de noticia devuelve un json con una lista de comentarios de esa noticia*/
        });
    }
    postComentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO comentarios set ?', [req.body]));
            res.json({ message: 'Comentario guardado' });
            /*dado un json de comentario guarda ese comentario en la base de datos*/
        });
    }
}
const noticiasController = new NoticiasController();
exports.default = noticiasController;
