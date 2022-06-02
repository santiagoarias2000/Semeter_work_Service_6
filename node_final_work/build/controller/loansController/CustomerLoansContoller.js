"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchCustomerLoan_1 = __importDefault(require("../../daos/loansDaos/SearchCustomerLoan"));
const sql_loan_customer_1 = require("../../repository/loansRepository/sql_loan_customer");
class CusLoanControllerSearch extends SearchCustomerLoan_1.default {
    busqueCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CusLoanControllerSearch.searchCustomer(sql_loan_customer_1.SQL_LOAN_CUSTOMER.SQL, parametro, res);
    }
}
const cusLoanControllerSearch = new CusLoanControllerSearch();
exports.default = cusLoanControllerSearch;
