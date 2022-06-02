import { Router } from "express";
import loansControllerCreate from "../controller/loansController/CreateContoller";
import cusLoanControllerSearch from "../controller/loansController/CustomerLoansContoller";
import loansControllerDelete from "../controller/loansController/DeleteController";
import loansControllerSearch from "../controller/loansController/SearchController";
import loansControllerGet from "../controller/loansController/ToListController";


class LoansRoutes {
    public routesApiLoans: Router;
    constructor() {
        this.routesApiLoans = Router();
        this.setting();
    }
    public setting() {
        this.routesApiLoans.get('/view', loansControllerGet.getMeCustomer);
        this.routesApiLoans.post('/create', loansControllerCreate.createMeCustomer);
        this.routesApiLoans.get('/search/:elCodigo', loansControllerSearch.busqueUnoMano);
        this.routesApiLoans.delete('/delete/:elCodigo', loansControllerDelete.deleteCustomer);
        this.routesApiLoans.get('/searchCustomer/:elCodigo', cusLoanControllerSearch.busqueCustomer);
    }
}
const loansRoutes = new LoansRoutes();
export default loansRoutes.routesApiLoans;