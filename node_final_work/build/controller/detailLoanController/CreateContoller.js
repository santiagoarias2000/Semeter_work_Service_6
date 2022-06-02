"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/detailLoanDaos/Create"));
const sql_create_1 = require("../../repository/detailsLoansRepository/sql_create");
class DetailLoanControllerCreate extends Create_1.default {
    createMeDetaiLoan(req, res) {
        const id_book = req.body.idBook;
        const id_loan = req.body.idLoan;
        const deliver_date = req.body.deliverDate;
        const description = req.body.description;
        const overdue_day = req.body.overdueDay;
        const return_date = req.body.returnDate;
        const parameter = [id_book, id_loan, deliver_date, description, overdue_day, return_date];
        DetailLoanControllerCreate.createBook(sql_create_1.SQL_DETAIL_LOAN_CREATE.CONFIRM, sql_create_1.SQL_DETAIL_LOAN_CREATE.CREATE, parameter, res);
    }
}
const detailLoanControllerCreate = new DetailLoanControllerCreate();
exports.default = detailLoanControllerCreate;
