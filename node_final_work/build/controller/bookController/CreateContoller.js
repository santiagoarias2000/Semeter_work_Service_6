"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/bookDaos/Create"));
const sql_create_1 = require("../../repository/bookRepository/sql_create");
class BookControllerCreate extends Create_1.default {
    createMeBook(req, res) {
        const title = req.body.title;
        const code = req.body.code;
        const id_editorial = req.body.id_editorial;
        const isbn = req.body.isbn;
        const publication_date = req.body.publication_date;
        const parameter = [title, code, id_editorial, isbn, publication_date];
        BookControllerCreate.createBook(sql_create_1.SQL_BOOK_CREATE.CONFIRM, sql_create_1.SQL_BOOK_CREATE.CREATE, parameter, res);
    }
}
const bookControllerCreate = new BookControllerCreate();
exports.default = bookControllerCreate;
