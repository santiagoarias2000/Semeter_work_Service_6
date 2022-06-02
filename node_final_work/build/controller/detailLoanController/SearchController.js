"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/detailLoanDaos/Search"));
const sql_search_1 = require("../../repository/detailsLoansRepository/sql_search");
class DetailLoanControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        DetailLoanControllerSearch.searchById(sql_search_1.SQL_DETAIL_LOAN_SEARCH.CARGAR, parametro, res);
    }
}
const detailLoanControllerSearch = new DetailLoanControllerSearch();
exports.default = detailLoanControllerSearch;
