"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/loansDaos/Search"));
const sql_search_1 = require("../../repository/loansRepository/sql_search");
class LoansControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        LoansControllerSearch.searchById(sql_search_1.SQL_LOAN_SEARCH.CARGAR, parametro, res);
    }
}
const loansControllerSearch = new LoansControllerSearch();
exports.default = loansControllerSearch;
