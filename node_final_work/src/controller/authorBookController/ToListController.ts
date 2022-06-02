import { Request, Response } from "express";
import AuthorBookToList from "../../daos/authorBookDaos/ToListo";
import { SQL_AUTHOR_BOOK_VIEW } from "../../repository/authorBookRepository/sql_toList";


class AuthorBookControllerGet extends AuthorBookToList{
    public getMeAuthorBook(req: Request, res: Response): void{
        AuthorBookControllerGet.getCustomers(SQL_AUTHOR_BOOK_VIEW.VIEW, [], res);
    } 
}
const authorBookControllerGet = new AuthorBookControllerGet();
export default authorBookControllerGet;