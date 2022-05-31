import { Request, Response } from "express";
import EditorialSearch from "../../daos/editorialDaos/Search";
import { SQL_EDITORIAL_SEARCH } from "../../repository/editorialsRepository/sql_search";

class EditorialControllerSearch extends EditorialSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        EditorialControllerSearch.searchById(SQL_EDITORIAL_SEARCH.CARGAR,parametro, res);
    } 
}
const editorialControllerSearch = new EditorialControllerSearch();
export default editorialControllerSearch;