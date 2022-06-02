import { Router } from "express";
import detailLoanControllerCreate from "../controller/detailLoanController/CreateContoller";
import detailLoanControllerDelete from "../controller/detailLoanController/DeleteController";
import detailLoanControllerSearch from "../controller/detailLoanController/SearchController";
import detailLoanControllerGet from "../controller/detailLoanController/ToListController";



class DetailLoanRoutes {
    public routesApiDetailLoan: Router;
    constructor() {
        this.routesApiDetailLoan = Router();
        this.setting();
    }
    public setting() {
        this.routesApiDetailLoan.get('/view', detailLoanControllerGet.getMeDetailLoan);
        this.routesApiDetailLoan.post('/create', detailLoanControllerCreate.createMeDetaiLoan);
        this.routesApiDetailLoan.get('/search/:elCodigo', detailLoanControllerSearch.busqueUnoMano);
        this.routesApiDetailLoan.delete('/delete/:elCodigo', detailLoanControllerDelete.delete);
    }
}
const detailLoanRoutes = new DetailLoanRoutes();
export default detailLoanRoutes.routesApiDetailLoan;