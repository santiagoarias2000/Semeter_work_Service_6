"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToListo_1 = __importDefault(require("../../daos/editorialDaos/ToListo"));
const sql_toList_1 = require("../../repository/editorialsRepository/sql_toList");
class EditorialControllerGet extends ToListo_1.default {
    getMeCustomer(req, res) {
        EditorialControllerGet.getEditorial(sql_toList_1.SQL_EDITORIAL_VIEW.VIEW, [], res);
    }
}
const editorialControllerGet = new EditorialControllerGet();
exports.default = editorialControllerGet;
