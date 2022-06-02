import { Request, Response } from "express";
import DetailLoanToList from "../../daos/detailLoanDaos/ToListo";
import { SQL_DETAIL_LOAN_VIEW } from "../../repository/detailsLoansRepository/sql_toList";

class DetailLoanControllerGet extends DetailLoanToList{
    public getMeDetailLoan(req: Request, res: Response): void{
        DetailLoanControllerGet.getDetailLoan(SQL_DETAIL_LOAN_VIEW.VIEW, [], res);
    } 
}
const detailLoanControllerGet = new DetailLoanControllerGet();
export default detailLoanControllerGet;