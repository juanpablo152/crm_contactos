import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import contactoRoutes from './routes/contactoRoutes';
import regisusuarioRoutes from './routes/regisusuarioRoutes';
import establecimientoRoutes from './routes/establecimientoRoutes';

class Server {

    public app: Application;
    
    constructor() {
      this.app = express();
      this.config();
      this.routes();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/contacto',contactoRoutes);
        this.app.use('/api/establecimiento',establecimientoRoutes);
        this.app.use('/api/regisusuario',regisusuarioRoutes);

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));

        });
    }

}

const server = new Server();
server.start();