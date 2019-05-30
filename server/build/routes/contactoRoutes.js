"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoController_1 = require("../controllers/contactoController");
class ContactoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contactoController_1.contactoController.list);
        this.router.get('/:id', contactoController_1.contactoController.getone);
        this.router.post('/', contactoController_1.contactoController.create);
        this.router.delete('/:id', contactoController_1.contactoController.delete);
        this.router.put('/:id', contactoController_1.contactoController.update);
    }
}
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
