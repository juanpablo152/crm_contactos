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
class EstablecimientoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const establecimiento = yield database_1.default.query('SELECT * FROM establecimiento');
            res.json(establecimiento);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO establecimiento set ?', [req.body]);
            console.log(req.body);
            res.json({ text: "establecimiento añadido" });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const establecimiento = yield database_1.default.query('SELECT * FROM establecimiento WHERE id_est = ?', [id]);
            if (establecimiento.length > 0) {
                return res.json(establecimiento[0]);
            }
            else {
                res.status(404).json({ text: 'el establecimiento no existe' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM establecimiento WHERE id_est = ?', [id]);
            res.json({ message: 'establecimiento eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE establecimiento set ? WHERE id_est = ?', [req.body, id]);
            res.json({ text: 'establecimiento actualizada' });
        });
    }
}
exports.establecimientoController = new EstablecimientoController();
