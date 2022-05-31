import { Router } from "express";
import customerControllerCreate from "../controller/customerController/CreateContoller";
import customerControllerDelete from "../controller/customerController/DeleteController";
import customerControllerSearch from "../controller/customerController/SearchController";
import customerControllerGet from "../controller/customerController/ToListController";

class CustomerRoutes {
    public routesApiCustomer: Router;
    constructor() {
        this.routesApiCustomer = Router();
        this.setting();
    }
    public setting() {
        this.routesApiCustomer.get('/view', customerControllerGet.getMeCustomer);
        this.routesApiCustomer.post('/create', customerControllerCreate.createMeCustomer);
        this.routesApiCustomer.get('/search/:elCodigo', customerControllerSearch.busqueUnoMano);
        this.routesApiCustomer.delete('/delete/:elCodigo', customerControllerDelete.deleteCustomer);
    }
}
const customerRoutes = new CustomerRoutes();
export default customerRoutes.routesApiCustomer;