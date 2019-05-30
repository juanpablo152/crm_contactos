"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regis_usuarioController_1 = require("../controllers/regis_usuarioController");
class Regis_usuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regis_usuarioController_1.regisusuarioController.list);
        this.router.get('/:id', regis_usuarioController_1.regisusuarioController.getone);
        this.router.post('/', regis_usuarioController_1.regisusuarioController.create);
        this.router.delete('/:id', regis_usuarioController_1.regisusuarioController.delete);
        this.router.put('/:id', regis_usuarioController_1.regisusuarioController.update);
    }
}
const regisusuarioRoutes = new Regis_usuarioRoutes();
exports.default = regisusuarioRoutes.router;
