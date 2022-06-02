"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/authorBookDaos/Delete"));
const sql_delete_1 = require("../../repository/authorBookRepository/sql_delete");
class AuthorBookControllerDelete extends Delete_1.default {
    deleteCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorBookControllerDelete.deleteById(sql_delete_1.SQL_AUTHOR_BOOK_DELETE.DELETE, parametro, res);
    }
}
const authorBookControllerDelete = new AuthorBookControllerDelete();
exports.default = authorBookControllerDelete;
