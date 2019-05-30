"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ContactoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacto = yield database_1.default.query('SELECT * FROM persona');
            res.json(contacto);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO persona set ?', [req.body]);
            console.log(req.body);
            res.json({ text: "persona añadido" });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const contacto = yield database_1.default.query('SELECT * FROM persona WHERE id_clie = ?', [id]);
            if (contacto.length > 0) {
                return res.json(contacto[0]);
            }
            else {
                res.status(404).json({ text: 'la persona no existe' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM persona WHERE id_clie = ?', [id]);
            res.json({ message: 'contacto eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE persona set ? WHERE id_clie = ?', [req.body, id]);
            res.json({ text: 'persona actualizada' });
        });
    }
}
exports.contactoController = new ContactoController();
