import { Router } from "express";
import bookControllerCreate from "../controller/bookController/CreateContoller";
import bookControllerDelete from "../controller/bookController/DeleteController";
import bookDetailControllerSearch from "../controller/bookController/dlBookController";
import bookControllerSearch from "../controller/bookController/SearchController";
import bookControllerGet from "../controller/bookController/ToListController";



class BookRoutes {
    public routesApiBook: Router;
    constructor() {
        this.routesApiBook = Router();
        this.setting();
    }
    public setting() {
        this.routesApiBook.get('/view', bookControllerGet.getMeBook);
        this.routesApiBook.post('/create', bookControllerCreate.createMeBook);
        this.routesApiBook.get('/search/:elCodigo', bookControllerSearch.busqueUnoMano);
        this.routesApiBook.delete('/delete/:elCodigo', bookControllerDelete.deleteBook);
        this.routesApiBook.get('/detailBook/:elCodigo', bookDetailControllerSearch.busquelibro);
    }
}
const bookRoutes = new BookRoutes();
export default bookRoutes.routesApiBook;