import { Response, Request } from "express";
import AuhorUpdate from "../../daos/authorDaos/Update";
import { SQL_AUTHOR_UPDATE } from "../../repository/authorRepository/sql_update";

class AuthorControllerUpdate extends AuhorUpdate{
    public updateAuthor(req: Request, res: Response): void {
        const cod = req.body.cod;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const description = req.body.description;
        const nationality = req.body.nationality;
        const parameter = [cod, name,lastname,description,nationality];
        AuthorControllerUpdate.updateAuthor(SQL_AUTHOR_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const authorControllerUpdate = new AuthorControllerUpdate();
export default authorControllerUpdate;