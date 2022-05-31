import { Request, Response } from "express";
import EditorialDelete from "../../daos/editorialDaos/Delete";
import { SQL_EDITORIALS_DELETE } from "../../repository/editorialsRepository/sql_delete";

class EditorialControllerDelete extends EditorialDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialControllerDelete.deleteById(SQL_EDITORIALS_DELETE.DELETE,parametro, res);
    }
}
const editorialControllerDelete = new EditorialControllerDelete();
export default editorialControllerDelete;