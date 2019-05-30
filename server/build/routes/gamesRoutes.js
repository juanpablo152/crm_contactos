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
        //     this.router.get('/:id', gamesController.getone);
        //     this.router.post('/', gamesController.create);
        //     this.router.delete('/:id', gamesController.delete);
        //     this.router.put('/:id', gamesController.update);
    }
}
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
