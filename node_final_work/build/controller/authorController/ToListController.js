"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/authorDaos/ToListo"));
const sql_toList_1 = require("../../repository/authorRepository/sql_toList");
class AuthorControllerGet extends ToListo_1.default {
    getMeCustomer(req, res) {
        AuthorControllerGet.getCustomers(sql_toList_1.SQL_AUTHOR_VIEW.VIEW, [], res);
    }
}
const authorControllerGet = new AuthorControllerGet();
exports.default = authorControllerGet;
