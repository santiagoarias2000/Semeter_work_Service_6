import { Response, Request } from "express";
import DetailLoanUpdate from "../../daos/detailLoanDaos/Update";
import { SQL_DETAIL_LOAN_UPDATE } from "../../repository/detailsLoansRepository/sql_update";

class DetailLoanControllerUpdate extends DetailLoanUpdate{
    public updateMateria(req: Request, res: Response): void {
        const cod = req.body.cod;
        const id_book = req.body.idBook;
        const id_loan = req.body.idLoan;
        const deliver_date = req.body.deliverDate;
        const description = req.body.description;
        const overdue_day = req.body.overdueDay;
        const return_date = req.body.returnDate;
        const parameter = [ cod, id_book,id_loan,deliver_date,description,overdue_day,return_date];
        DetailLoanControllerUpdate.updateBook(SQL_DETAIL_LOAN_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const detailLoanControllerUpdate = new DetailLoanControllerUpdate();
export default detailLoanControllerUpdate;