import { Request, Response } from 'express';
import * as http from "http";
class IndexController {
    public index (req: Request, res: Response) {
        res.send('API is in /api/noticias')
    }

}

export const indexController = new IndexController();
