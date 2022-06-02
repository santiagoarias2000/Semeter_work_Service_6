"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/bookDaos/Search"));
const sql_search_1 = require("../../repository/bookRepository/sql_search");
class BookControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookControllerSearch.searchById(sql_search_1.SQL_BOOK_SEARCH.CARGAR, parametro, res);
    }
}
const bookControllerSearch = new BookControllerSearch();
exports.default = bookControllerSearch;
