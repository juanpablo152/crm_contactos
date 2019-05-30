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
class RegisusuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regisusuario = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(regisusuario);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            console.log(req.body);
            res.json({ text: "usuario añadido" });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regisusuario = yield database_1.default.query('SELECT * FROM usuarios WHERE iduser = ?', [id]);
            if (regisusuario.length > 0) {
                return res.json(regisusuario[0]);
            }
            else {
                res.status(404).json({ text: 'el usuario no existe' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE iduser = ?', [id]);
            res.json({ message: 'usuario eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios set ? WHERE iduser = ?', [req.body, id]);
            res.json({ text: 'usuario actualizada' });
        });
    }
}
exports.regisusuarioController = new RegisusuarioController();
