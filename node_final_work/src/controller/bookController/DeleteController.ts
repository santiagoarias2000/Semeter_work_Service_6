import { Request, Response } from "express";
import BookDelete from "../../daos/bookDaos/Delete";
import { SQL_BOOK_DELETE } from "../../repository/bookRepository/sql_delete";

class BookControllerDelete extends BookDelete{
    public deleteBook(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookControllerDelete.deleteById(SQL_BOOK_DELETE.DELETE,parametro, res);
    }
}
const bookControllerDelete = new BookControllerDelete();
export default bookControllerDelete;