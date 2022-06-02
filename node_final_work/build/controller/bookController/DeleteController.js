"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/bookDaos/Delete"));
const sql_delete_1 = require("../../repository/bookRepository/sql_delete");
class BookControllerDelete extends Delete_1.default {
    deleteBook(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookControllerDelete.deleteById(sql_delete_1.SQL_BOOK_DELETE.DELETE, parametro, res);
    }
}
const bookControllerDelete = new BookControllerDelete();
exports.default = bookControllerDelete;
