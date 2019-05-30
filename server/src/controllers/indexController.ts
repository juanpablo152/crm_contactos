import {Request, Response} from 'express';

class IndexController {

  public index (req :Request, res :Response) {

    res.json({text: 'Api is /api/contacto'});
    
    }
}


export const indexController = new IndexController();