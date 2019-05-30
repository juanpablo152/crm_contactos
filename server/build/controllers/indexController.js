"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'Api is /api/contacto' });
    }
}
exports.indexController = new IndexController();
