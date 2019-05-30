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
        this.router.get('/', regis_usuarioController_1.regis_usuarioController.list);
        this.router.get('/:id', regis_usuarioController_1.regis_usuarioController.getone);
        this.router.post('/', regis_usuarioController_1.regis_usuarioController.create);
        this.router.delete('/:id', regis_usuarioController_1.regis_usuarioController.delete);
        this.router.put('/:id', regis_usuarioController_1.regis_usuarioController.update);
    }
}
const regis_usuarioRoutes = new Regis_usuarioRoutes();
exports.default = regis_usuarioRoutes.router;
