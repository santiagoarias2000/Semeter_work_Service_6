"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/loansDaos/Update"));
const sql_update_1 = require("../../repository/loansRepository/sql_update");
class LoansControllerUpdate extends Update_1.default {
    updateLoans(req, res) {
        const cod = req.body.cod;
        const id_customer = req.body.id_customer;
        const description = req.body.description;
        const start_date = req.body.start_date;
        const parameter = [id_customer, description, start_date];
        LoansControllerUpdate.updateLoans(sql_update_1.SQL_AUTHOR_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const loansControllerUpdate = new LoansControllerUpdate();
exports.default = loansControllerUpdate;
