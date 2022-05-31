import { Response, Request } from "express";
import EditorialUpdate from "../../daos/editorialDaos/Update";
import { SQL_EDITORIAL_UPDATE } from "../../repository/editorialsRepository/sql_update";

class EditorialControllerUpdate extends EditorialUpdate{
    public updateMateria(req: Request, res: Response): void {
        const cod = req.body.cod;
        const name = req.body.name;
        const contry = req.body.lastname;
        const phone = req.body.address;
        const parameter = [cod, name, contry, phone];
        EditorialControllerUpdate.updateMateria(SQL_EDITORIAL_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const editorialControllerUpdate = new EditorialControllerUpdate();
export default editorialControllerUpdate;