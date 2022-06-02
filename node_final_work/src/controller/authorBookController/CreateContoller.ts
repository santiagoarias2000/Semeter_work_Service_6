import { Request, Response } from "express";
import AuthorBookCreate from "../../daos/authorBookDaos/Create";
import { SQL_AUTHOR_BOOK_CREATE } from "../../repository/authorBookRepository/sql_create";

class AuthorBookControllerCreate extends AuthorBookCreate {
    public createMeAuthorBook(req: Request, res: Response): void {
        const id_book = req.body.idBook;
        const id_author = req.body.idAuthor;
        const parameter = [id_book, id_author];
        AuthorBookControllerCreate.createBookAuthor(SQL_AUTHOR_BOOK_CREATE.CONFIRM, SQL_AUTHOR_BOOK_CREATE.CREATE, parameter, res);
    }
}
const authorBookControllerCreate = new AuthorBookControllerCreate();
export default authorBookControllerCreate;