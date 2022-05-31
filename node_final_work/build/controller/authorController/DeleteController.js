"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/authorDaos/Delete"));
const sql_delete_1 = require("../../repository/authorRepository/sql_delete");
class AuthorControllerDelete extends Delete_1.default {
    deleteCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorControllerDelete.deleteById(sql_delete_1.SQL_AUTHOR_DELETE.DELETE, parametro, res);
    }
}
const authorControllerDelete = new AuthorControllerDelete();
exports.default = authorControllerDelete;
