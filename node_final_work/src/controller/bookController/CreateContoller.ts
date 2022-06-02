import { Request, Response } from "express";
import BookCreate from "../../daos/bookDaos/Create";
import { SQL_BOOK_CREATE } from "../../repository/bookRepository/sql_create";

class BookControllerCreate extends BookCreate {
    public createMeBook(req: Request, res: Response): void {
        const title = req.body.title;
        const code = req.body.code;
        const id_editorial = req.body.id_editorial;
        const isbn = req.body.isbn;
        const publication_date = req.body.publication_date;
        const parameter = [ title,code,id_editorial,isbn,publication_date];
        BookControllerCreate.createBook(SQL_BOOK_CREATE.CONFIRM, SQL_BOOK_CREATE.CREATE, parameter, res);
    }
}
const bookControllerCreate = new BookControllerCreate();
export default bookControllerCreate;