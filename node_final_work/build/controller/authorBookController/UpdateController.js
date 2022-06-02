"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/authorBookDaos/Update"));
const sql_update_1 = require("../../repository/authorBookRepository/sql_update");
class AuthorBookControllerUpdate extends Update_1.default {
    updateAuthor(req, res) {
        const cod = req.body.cod;
        const id_book = req.body.idBook;
        const id_author = req.body.idAuthor;
        const parameter = [cod, id_book, id_author];
        AuthorBookControllerUpdate.updateAuthor(sql_update_1.SQL_AUTHOR_BOOK_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const authorBookControllerUpdate = new AuthorBookControllerUpdate();
exports.default = authorBookControllerUpdate;
