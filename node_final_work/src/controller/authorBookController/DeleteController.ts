import { Request, Response } from "express";
import AuthorBookDelete from "../../daos/authorBookDaos/Delete";
import { SQL_AUTHOR_BOOK_DELETE } from "../../repository/authorBookRepository/sql_delete";


class AuthorBookControllerDelete extends AuthorBookDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorBookControllerDelete.deleteById(SQL_AUTHOR_BOOK_DELETE.DELETE,parametro, res);
    }
}
const authorBookControllerDelete = new AuthorBookControllerDelete();
export default authorBookControllerDelete;