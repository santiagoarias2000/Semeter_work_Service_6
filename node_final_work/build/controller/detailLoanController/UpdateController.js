"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/detailLoanDaos/Update"));
const sql_update_1 = require("../../repository/detailsLoansRepository/sql_update");
class DetailLoanControllerUpdate extends Update_1.default {
    updateMateria(req, res) {
        const cod = req.body.cod;
        const id_book = req.body.idBook;
        const id_loan = req.body.idLoan;
        const deliver_date = req.body.deliverDate;
        const description = req.body.description;
        const overdue_day = req.body.overdueDay;
        const return_date = req.body.returnDate;
        const parameter = [cod, id_book, id_loan, deliver_date, description, overdue_day, return_date];
        DetailLoanControllerUpdate.updateBook(sql_update_1.SQL_DETAIL_LOAN_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const detailLoanControllerUpdate = new DetailLoanControllerUpdate();
exports.default = detailLoanControllerUpdate;
