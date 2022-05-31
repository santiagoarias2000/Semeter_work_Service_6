import { Request, Response } from "express";
import AuthorCreate from "../../daos/authorDaos/Create";
import { SQL_AUTHOR_CREATE } from "../../repository/authorRepository/sql_create";

class AuthorControllerCreate extends AuthorCreate {
    public createMeCustomer(req: Request, res: Response): void {
        const name = req.body.name;
        const lastname = req.body.lastname;
        const description = req.body.description;
        const nationality = req.body.nationality;
        const parameter = [name,lastname,description,nationality];
        AuthorControllerCreate.createAuthor(SQL_AUTHOR_CREATE.CONFIRM, SQL_AUTHOR_CREATE.CREATE, parameter, res);
    }
}
const authorControllerCreate = new AuthorControllerCreate();
export default authorControllerCreate;