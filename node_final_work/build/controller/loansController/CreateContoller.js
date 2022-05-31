"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/loansDaos/Create"));
const sql_create_1 = require("../../repository/loansRepository/sql_create");
class LoansControllerCreate extends Create_1.default {
    createMeCustomer(req, res) {
        const id_customer = req.body.id_customer;
        const description = req.body.description;
        const start_date = req.body.start_date;
        const parameter = [id_customer, description, start_date];
        LoansControllerCreate.createLoans(sql_create_1.SQL_LOANS_CREATE.CONFIRM, sql_create_1.SQL_LOANS_CREATE.CREATE, parameter, res);
    }
}
const loansControllerCreate = new LoansControllerCreate();
exports.default = loansControllerCreate;
