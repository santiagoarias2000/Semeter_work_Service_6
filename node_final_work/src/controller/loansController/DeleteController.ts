import { Request, Response } from "express";
import LoansDelete from "../../daos/loansDaos/Delete";
import { SQL_LOAN_DELETE } from "../../repository/loansRepository/sql_delete";

class LoansControllerDelete extends LoansDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        LoansControllerDelete.deleteById(SQL_LOAN_DELETE.DELETE,parametro, res);
    }
}
const loansControllerDelete = new LoansControllerDelete();
export default loansControllerDelete;