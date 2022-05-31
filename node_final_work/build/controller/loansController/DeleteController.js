"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/loansDaos/Delete"));
const sql_delete_1 = require("../../repository/loansRepository/sql_delete");
class LoansControllerDelete extends Delete_1.default {
    deleteCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        LoansControllerDelete.deleteById(sql_delete_1.SQL_LOAN_DELETE.DELETE, parametro, res);
    }
}
const loansControllerDelete = new LoansControllerDelete();
exports.default = loansControllerDelete;
