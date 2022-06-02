import { Request, Response } from "express";
import DetailLoanDelete from "../../daos/detailLoanDaos/Delete";
import { SQL_DETAIL_LOAN_DELETE } from "../../repository/detailsLoansRepository/sql_delete";

class DetailLoanControllerDelete extends DetailLoanDelete{
    public delete(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        DetailLoanControllerDelete.deleteById(SQL_DETAIL_LOAN_DELETE.DELETE,parametro, res);
    }
}
const detailLoanControllerDelete = new DetailLoanControllerDelete();
export default detailLoanControllerDelete;