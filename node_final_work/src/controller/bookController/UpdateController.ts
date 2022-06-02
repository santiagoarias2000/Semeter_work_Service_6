import { Response, Request } from "express";
import BookUpdate from "../../daos/bookDaos/Update";
import { SQL_BOOK_UPDATE } from "../../repository/bookRepository/sql_update";

class BookControllerUpdate extends BookUpdate{
    public updateMateria(req: Request, res: Response): void {
        const cod = req.body.cod;
        const title = req.body.title;
        const code = req.body.code;
        const id_editorial = req.body.id_editorial;
        const isbn = req.body.isbn;
        const publication_date = req.body.publication_date;
        const parameter = [cod, title,code,id_editorial,isbn,publication_date];
        BookControllerUpdate.updateBook(SQL_BOOK_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const bookControllerUpdate = new BookControllerUpdate();
export default bookControllerUpdate;