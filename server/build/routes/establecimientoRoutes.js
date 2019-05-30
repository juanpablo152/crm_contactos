"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const establecimientoController_1 = require("../controllers/establecimientoController");
class EstablecimientoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', establecimientoController_1.establecimientoController.list);
        this.router.get('/:id', establecimientoController_1.establecimientoController.getone);
        this.router.post('/', establecimientoController_1.establecimientoController.create);
        this.router.delete('/:id', establecimientoController_1.establecimientoController.delete);
        this.router.put('/:id', establecimientoController_1.establecimientoController.update);
    }
}
const establecimientoRoutes = new EstablecimientoRoutes();
exports.default = establecimientoRoutes.router;
