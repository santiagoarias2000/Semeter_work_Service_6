import { Request, Response } from "express";
import EditorialIdSearch from "../../daos/editorialDaos/SearchIdBook";
import { SQL_EDITORIAL_ID_BOOK} from "../../repository/editorialsRepository/sql_search_id_book";

class EditorialIdBookControllerSearch extends EditorialIdSearch{
    public busqueId(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialIdBookControllerSearch.searchByIdBook(SQL_EDITORIAL_ID_BOOK.SQL,parametro, res);
    } 
}
const editorialIdBookControllerSearch = new EditorialIdBookControllerSearch();
export default editorialIdBookControllerSearch;