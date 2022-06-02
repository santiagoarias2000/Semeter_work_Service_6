"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchIdBook_1 = __importDefault(require("../../daos/editorialDaos/SearchIdBook"));
const sql_search_id_book_1 = require("../../repository/editorialsRepository/sql_search_id_book");
class EditorialIdBookControllerSearch extends SearchIdBook_1.default {
    busqueId(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialIdBookControllerSearch.searchByIdBook(sql_search_id_book_1.SQL_EDITORIAL_ID_BOOK.SQL, parametro, res);
    }
}
const editorialIdBookControllerSearch = new EditorialIdBookControllerSearch();
exports.default = editorialIdBookControllerSearch;
