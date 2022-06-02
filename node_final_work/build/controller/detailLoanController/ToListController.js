"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/detailLoanDaos/ToListo"));
const sql_toList_1 = require("../../repository/detailsLoansRepository/sql_toList");
class DetailLoanControllerGet extends ToListo_1.default {
    getMeDetailLoan(req, res) {
        DetailLoanControllerGet.getDetailLoan(sql_toList_1.SQL_DETAIL_LOAN_VIEW.VIEW, [], res);
    }
}
const detailLoanControllerGet = new DetailLoanControllerGet();
exports.default = detailLoanControllerGet;
