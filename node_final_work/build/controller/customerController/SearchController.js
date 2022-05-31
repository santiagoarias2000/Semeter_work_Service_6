"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Search_1 = __importDefault(require("../../daos/customerDaos/Search"));
const sql_search_1 = require("../../repository/customerRepository/sql_search");
class CustomerControllerSearch extends Search_1.default {
    busqueUnoMano(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CustomerControllerSearch.searchById(sql_search_1.SQL_CUSTOMERA_SEARCH.CARGAR, parametro, res);
    }
}
const customerControllerSearch = new CustomerControllerSearch();
exports.default = customerControllerSearch;
