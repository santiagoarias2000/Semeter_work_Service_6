"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/bookDaos/ToListo"));
const sql_toList_1 = require("../../repository/bookRepository/sql_toList");
class BookControllerGet extends ToListo_1.default {
    getMeBook(req, res) {
        BookControllerGet.getBook(sql_toList_1.SQL_BOOK_VIEW.VIEW, [], res);
    }
}
const bookControllerGet = new BookControllerGet();
exports.default = bookControllerGet;
