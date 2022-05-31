"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/editorialDaos/Search"));
const sql_search_1 = require("../../repository/editorialsRepository/sql_search");
class EditorialControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialControllerSearch.searchById(sql_search_1.SQL_EDITORIAL_SEARCH.CARGAR, parametro, res);
    }
}
const editorialControllerSearch = new EditorialControllerSearch();
exports.default = editorialControllerSearch;
