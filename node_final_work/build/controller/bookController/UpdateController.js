"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/bookDaos/Update"));
const sql_update_1 = require("../../repository/bookRepository/sql_update");
class BookControllerUpdate extends Update_1.default {
    updateMateria(req, res) {
        const cod = req.body.cod;
        const title = req.body.title;
        const code = req.body.code;
        const id_editorial = req.body.id_editorial;
        const isbn = req.body.isbn;
        const publication_date = req.body.publication_date;
        const parameter = [cod, title, code, id_editorial, isbn, publication_date];
        BookControllerUpdate.updateBook(sql_update_1.SQL_BOOK_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const bookControllerUpdate = new BookControllerUpdate();
exports.default = bookControllerUpdate;
