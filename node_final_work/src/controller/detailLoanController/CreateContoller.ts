import { Request, Response } from "express";
import DetailLoanCreate from "../../daos/detailLoanDaos/Create";
import { SQL_DETAIL_LOAN_CREATE } from "../../repository/detailsLoansRepository/sql_create";

class DetailLoanControllerCreate extends DetailLoanCreate {
    public createMeDetaiLoan(req: Request, res: Response): void {
        const id_book = req.body.idBook;
        const id_loan = req.body.idLoan;
        const deliver_date = req.body.deliverDate;
        const description = req.body.description;
        const overdue_day = req.body.overdueDay;
        const return_date = req.body.returnDate;
        const parameter = [ id_book,id_loan,deliver_date,description,overdue_day,return_date];
        DetailLoanControllerCreate.createBook(SQL_DETAIL_LOAN_CREATE.CONFIRM, SQL_DETAIL_LOAN_CREATE.CREATE, parameter, res);
    }
}
const detailLoanControllerCreate = new DetailLoanControllerCreate();
export default detailLoanControllerCreate;