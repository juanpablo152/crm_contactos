import { Router } from 'express';
import {contactoController} from '../controllers/contactoController';

class ContactoRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void{
        this.router.get('/', contactoController.list);
        this.router.get('/:id', contactoController.getone);
        this.router.post('/', contactoController.create);
        this.router.delete('/:id', contactoController.delete);
        this.router.put('/:id', contactoController.update);
    }
}

  const  contactoRoutes = new ContactoRoutes();
  export default contactoRoutes.router;