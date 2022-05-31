"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/editorialDaos/Update"));
const sql_update_1 = require("../../repository/editorialsRepository/sql_update");
class EditorialControllerUpdate extends Update_1.default {
    updateMateria(req, res) {
        const cod = req.body.cod;
        const name = req.body.name;
        const contry = req.body.lastname;
        const phone = req.body.address;
        const parameter = [cod, name, contry, phone];
        EditorialControllerUpdate.updateMateria(sql_update_1.SQL_EDITORIAL_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const editorialControllerUpdate = new EditorialControllerUpdate();
exports.default = editorialControllerUpdate;
