"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/editorialDaos/Delete"));
const sql_delete_1 = require("../../repository/editorialsRepository/sql_delete");
class EditorialControllerDelete extends Delete_1.default {
    deleteCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialControllerDelete.deleteById(sql_delete_1.SQL_EDITORIALS_DELETE.DELETE, parametro, res);
    }
}
const editorialControllerDelete = new EditorialControllerDelete();
exports.default = editorialControllerDelete;
