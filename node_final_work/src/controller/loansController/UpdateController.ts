import { Response, Request } from "express";
import LoansUpdate from "../../daos/loansDaos/Update";
import { SQL_AUTHOR_UPDATE } from "../../repository/loansRepository/sql_update";

class LoansControllerUpdate extends LoansUpdate{
    public updateLoans(req: Request, res: Response): void {
        const cod = req.body.cod;
        const id_customer = req.body.id_customer;
        const description = req.body.description;
        const start_date = req.body.start_date;
        const parameter = [ id_customer,description,start_date];
        LoansControllerUpdate.updateLoans(SQL_AUTHOR_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const loansControllerUpdate = new LoansControllerUpdate();
export default loansControllerUpdate;