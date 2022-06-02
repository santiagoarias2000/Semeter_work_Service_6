"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/authorBookDaos/Create"));
const sql_create_1 = require("../../repository/authorBookRepository/sql_create");
class AuthorBookControllerCreate extends Create_1.default {
    createMeAuthorBook(req, res) {
        const id_book = req.body.idBook;
        const id_author = req.body.idAuthor;
        const parameter = [id_book, id_author];
        AuthorBookControllerCreate.createBookAuthor(sql_create_1.SQL_AUTHOR_BOOK_CREATE.CONFIRM, sql_create_1.SQL_AUTHOR_BOOK_CREATE.CREATE, parameter, res);
    }
}
const authorBookControllerCreate = new AuthorBookControllerCreate();
exports.default = authorBookControllerCreate;
