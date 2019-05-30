import { Router } from 'express';
import { establecimientoController } from '../controllers/establecimientoController';

class EstablecimientoRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void{
        this.router.get('/', establecimientoController.list);
        this.router.get('/:id', establecimientoController.getone);
        this.router.post('/', establecimientoController.create);
        this.router.delete('/:id', establecimientoController.delete);
        this.router.put('/:id', establecimientoController.update);
    }
}

  const  establecimientoRoutes = new EstablecimientoRoutes();
  export default establecimientoRoutes.router;