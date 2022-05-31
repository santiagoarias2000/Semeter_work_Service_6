"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/authorDaos/Search"));
const sql_search_1 = require("../../repository/authorRepository/sql_search");
class AuthorControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorControllerSearch.searchById(sql_search_1.SQL_AUTHOR_SEARCH.CARGAR, parametro, res);
    }
}
const authorControllerSearch = new AuthorControllerSearch();
exports.default = authorControllerSearch;
