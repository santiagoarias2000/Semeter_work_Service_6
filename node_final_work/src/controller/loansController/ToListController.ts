import { Request, Response } from "express";
import LoansToList from "../../daos/loansDaos/ToListo";
import { SQL_LOAN_VIEW } from "../../repository/loansRepository/sql_toList";

class LoansControllerGet extends LoansToList{
    public getMeCustomer(req: Request, res: Response): void{
        LoansControllerGet.getCustomers(SQL_LOAN_VIEW.VIEW, [], res);
    } 
}
const loansControllerGet = new LoansControllerGet();
export default loansControllerGet;