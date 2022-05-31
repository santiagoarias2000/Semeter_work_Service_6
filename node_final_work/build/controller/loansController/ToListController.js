"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/loansDaos/ToListo"));
const sql_toList_1 = require("../../repository/loansRepository/sql_toList");
class LoansControllerGet extends ToListo_1.default {
    getMeCustomer(req, res) {
        LoansControllerGet.getCustomers(sql_toList_1.SQL_LOAN_VIEW.VIEW, [], res);
    }
}
const loansControllerGet = new LoansControllerGet();
exports.default = loansControllerGet;
