import { Request, Response } from "express";
import EditorialToList from "../../daos/editorialDaos/ToListo";
import { SQL_EDITORIAL_VIEW } from "../../repository/editorialsRepository/sql_toList";

class EditorialControllerGet extends EditorialToList{
    public getMeCustomer(req: Request, res: Response): void{
        EditorialControllerGet.getCustomers(SQL_EDITORIAL_VIEW.VIEW, [], res);
    } 
}
const editorialControllerGet = new EditorialControllerGet();
export default editorialControllerGet;