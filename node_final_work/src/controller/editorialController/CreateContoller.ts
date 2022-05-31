import { Request, Response } from "express";
import EditorialCreate from "../../daos/editorialDaos/Create";
import { SQL_EDITORIALS_CREATE } from "../../repository/editorialsRepository/sql_create"

class EditorialControllerCreate extends EditorialCreate {
    public createMeCustomer(req: Request, res: Response): void {
        const name = req.body.name;
        const contry = req.body.lastname;
        const phone = req.body.address;
        const parameter = [ name, contry, phone];
        EditorialControllerCreate.createEditorial(SQL_EDITORIALS_CREATE.CONFIRM, SQL_EDITORIALS_CREATE.CREATE, parameter, res);
    }
}
const editorialControllerCreate = new EditorialControllerCreate();
export default editorialControllerCreate;