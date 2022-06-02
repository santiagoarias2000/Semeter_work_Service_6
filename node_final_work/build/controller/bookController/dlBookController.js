"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DlBook_1 = __importDefault(require("../../daos/bookDaos/DlBook"));
const sql_dl_book_1 = require("../../repository/bookRepository/sql_dl_book");
class BookDetailControllerSearch extends DlBook_1.default {
    busquelibro(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookDetailControllerSearch.searchIdDetail(sql_dl_book_1.SQL_DL_BOOK.SQL, parametro, res);
    }
}
const bookDetailControllerSearch = new BookDetailControllerSearch();
exports.default = bookDetailControllerSearch;
