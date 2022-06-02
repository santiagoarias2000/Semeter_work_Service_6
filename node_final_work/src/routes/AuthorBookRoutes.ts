import { Router } from "express";
import authorBookControllerCreate from "../controller/authorBookController/CreateContoller";
import authorBookControllerDelete from "../controller/authorBookController/DeleteController";
import authorBookControllerSearch from "../controller/authorBookController/SearchController";
import authorBookControllerGet from "../controller/authorBookController/ToListController";



class AuthorBookRoutes {
    public routesApiAuthorBook: Router;
    constructor() {
        this.routesApiAuthorBook = Router();
        this.setting();
    }
    public setting() {
        this.routesApiAuthorBook.get('/view', authorBookControllerGet.getMeAuthorBook);
        this.routesApiAuthorBook.post('/create', authorBookControllerCreate.createMeAuthorBook);
        this.routesApiAuthorBook.get('/search/:elCodigo', authorBookControllerSearch.busqueUnoMano);
        this.routesApiAuthorBook.delete('/delete/:elCodigo', authorBookControllerDelete.deleteCustomer);
    }
}
const authorBookRoutes = new AuthorBookRoutes();
export default authorBookRoutes.routesApiAuthorBook;