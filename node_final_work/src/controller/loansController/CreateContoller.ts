import { Request, Response } from "express";
import LoansCreate from "../../daos/loansDaos/Create";
import { SQL_LOANS_CREATE } from "../../repository/loansRepository/sql_create";

class LoansControllerCreate extends LoansCreate {
    public createMeCustomer(req: Request, res: Response): void {
        const id_customer = req.body.id_customer;
        const description = req.body.description;
        const start_date = req.body.start_date;
        const parameter = [ id_customer,description,start_date];
        LoansControllerCreate.createLoans(SQL_LOANS_CREATE.CONFIRM, SQL_LOANS_CREATE.CREATE, parameter, res);
    }
}
const loansControllerCreate = new LoansControllerCreate();
export default loansControllerCreate;