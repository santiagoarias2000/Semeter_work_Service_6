import { Request, Response } from "express";
import LoansCustomerSearch from "../../daos/loansDaos/SearchCustomerLoan";
import { SQL_LOAN_CUSTOMER } from "../../repository/loansRepository/sql_loan_customer";

class CusLoanControllerSearch extends LoansCustomerSearch{
    public busqueCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CusLoanControllerSearch.searchCustomer(SQL_LOAN_CUSTOMER.SQL,parametro, res);
    } 
}
const cusLoanControllerSearch = new CusLoanControllerSearch();
export default cusLoanControllerSearch;