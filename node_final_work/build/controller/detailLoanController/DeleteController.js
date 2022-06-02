"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/detailLoanDaos/Delete"));
const sql_delete_1 = require("../../repository/detailsLoansRepository/sql_delete");
class DetailLoanControllerDelete extends Delete_1.default {
    delete(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        DetailLoanControllerDelete.deleteById(sql_delete_1.SQL_DETAIL_LOAN_DELETE.DELETE, parametro, res);
    }
}
const detailLoanControllerDelete = new DetailLoanControllerDelete();
exports.default = detailLoanControllerDelete;
