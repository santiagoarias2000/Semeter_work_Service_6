import { Request, Response } from "express";
import AuthorDelete from "../../daos/authorDaos/Delete";
import { SQL_AUTHOR_DELETE } from "../../repository/authorRepository/sql_delete";


class AuthorControllerDelete extends AuthorDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorControllerDelete.deleteById(SQL_AUTHOR_DELETE.DELETE,parametro, res);
    }
}
const authorControllerDelete = new AuthorControllerDelete();
export default authorControllerDelete;