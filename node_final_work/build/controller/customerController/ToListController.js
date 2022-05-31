"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/customerDaos/ToListo"));
const sql_toList_1 = require("../../repository/customerRepository/sql_toList");
class CustomerControllerGet extends ToListo_1.default {
    getMeCustomer(req, res) {
        CustomerControllerGet.getCustomers(sql_toList_1.SQL_CUSTOMER_VIEW.VIEW, [], res);
    }
}
const customerControllerGet = new CustomerControllerGet();
exports.default = customerControllerGet;
