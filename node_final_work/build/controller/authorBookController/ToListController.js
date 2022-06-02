"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/authorBookDaos/ToListo"));
const sql_toList_1 = require("../../repository/authorBookRepository/sql_toList");
class AuthorBookControllerGet extends ToListo_1.default {
    getMeAuthorBook(req, res) {
        AuthorBookControllerGet.getCustomers(sql_toList_1.SQL_AUTHOR_BOOK_VIEW.VIEW, [], res);
    }
}
const authorBookControllerGet = new AuthorBookControllerGet();
exports.default = authorBookControllerGet;
