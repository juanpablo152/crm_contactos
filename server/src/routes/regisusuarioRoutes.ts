import { Router } from 'express';
import { regisusuarioController } from '../controllers/regis_usuarioController';

class Regis_usuarioRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void{
        this.router.get('/', regisusuarioController.list);
        this.router.get('/:id', regisusuarioController.getone);
        this.router.post('/', regisusuarioController.create);
        this.router.delete('/:id', regisusuarioController.delete);
        this.router.put('/:id', regisusuarioController.update);
    }
}

  const  regisusuarioRoutes = new Regis_usuarioRoutes();
  export default regisusuarioRoutes.router;