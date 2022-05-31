import { Request, Response } from "express";
import AuthorToList from "../../daos/authorDaos/ToListo";
import { SQL_AUTHOR_VIEW } from "../../repository/authorRepository/sql_toList";


class AuthorControllerGet extends AuthorToList{
    public getMeCustomer(req: Request, res: Response): void{
        AuthorControllerGet.getCustomers(SQL_AUTHOR_VIEW.VIEW, [], res);
    } 
}
const authorControllerGet = new AuthorControllerGet();
export default authorControllerGet;