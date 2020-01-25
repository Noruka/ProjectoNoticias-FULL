import { Request, Response } from 'express';
import * as http from "http";
class IndexController {
    public async index (req: Request, res: Response) {
        res.redirect('http://localhost:4200/noticias')
    }

}

export const indexController = new IndexController();
