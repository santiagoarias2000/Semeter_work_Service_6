import { Response, Request } from "express";
import AuhorBookUpdate from "../../daos/authorBookDaos/Update";
import { SQL_AUTHOR_BOOK_UPDATE } from "../../repository/authorBookRepository/sql_update";

class AuthorBookControllerUpdate extends AuhorBookUpdate{
    public updateAuthor(req: Request, res: Response): void {
        const cod = req.body.cod;
        const id_book = req.body.idBook;
        const id_author = req.body.idAuthor;
        const parameter = [cod, id_book, id_author];
        AuthorBookControllerUpdate.updateAuthor(SQL_AUTHOR_BOOK_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const authorBookControllerUpdate = new AuthorBookControllerUpdate();
export default authorBookControllerUpdate;