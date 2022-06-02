"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/authorBookDaos/Search"));
const sql_search_1 = require("../../repository/authorBookRepository/sql_search");
class AuthorBookControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorBookControllerSearch.searchById(sql_search_1.SQL_AUTHOR_BOOK_SEARCH.CARGAR, parametro, res);
    }
}
const authorBookControllerSearch = new AuthorBookControllerSearch();
exports.default = authorBookControllerSearch;
