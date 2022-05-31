import { Router } from "express";
import authorControllerCreate from "../controller/authorController/CreateContoller";
import authorControllerDelete from "../controller/authorController/DeleteController";
import authorControllerSearch from "../controller/authorController/SearchController";
import authorControllerGet from "../controller/authorController/ToListController";


class AuthorRoutes {
    public routesApiAuthor: Router;
    constructor() {
        this.routesApiAuthor = Router();
        this.setting();
    }
    public setting() {
        this.routesApiAuthor.get('/view', authorControllerGet.getMeCustomer);
        this.routesApiAuthor.post('/create', authorControllerCreate.createMeCustomer);
        this.routesApiAuthor.get('/search/:elCodigo', authorControllerSearch.busqueUnoMano);
        this.routesApiAuthor.delete('/delete/:elCodigo', authorControllerDelete.deleteCustomer);
    }
}
const authorRoutes = new AuthorRoutes();
export default authorRoutes.routesApiAuthor;