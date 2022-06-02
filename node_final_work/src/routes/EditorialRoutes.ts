import { Router } from "express";
import editorialControllerCreate from "../controller/editorialController/CreateContoller";
import editorialControllerDelete from "../controller/editorialController/DeleteController";
import editorialControllerSearch from "../controller/editorialController/SearchController";
import editorialIdBookControllerSearch from "../controller/editorialController/SearchIdBookController";
import editorialControllerGet from "../controller/editorialController/ToListController";

class EditorialRoutes {
    public routesApiEditorial: Router;
    constructor() {
        this.routesApiEditorial = Router();
        this.setting();
    }
    public setting() {
        this.routesApiEditorial.get('/view', editorialControllerGet.getMeCustomer);
        this.routesApiEditorial.post('/create', editorialControllerCreate.createMeCustomer);
        this.routesApiEditorial.get('/search/:elCodigo', editorialControllerSearch.busqueUnoMano);
        this.routesApiEditorial.delete('/delete/:elCodigo', editorialControllerDelete.deleteCustomer);
        this.routesApiEditorial.get('/searchId/:elCodigo', editorialIdBookControllerSearch.busqueId);
    }
}
const editorialRoutes = new EditorialRoutes();
export default editorialRoutes.routesApiEditorial;