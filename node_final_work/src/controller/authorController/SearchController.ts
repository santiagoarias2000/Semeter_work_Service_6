import { Request, Response } from "express";
import AuthorSearch from "../../daos/authorDaos/Search";
import { SQL_AUTHOR_SEARCH } from "../../repository/authorRepository/sql_search";

class AuthorControllerSearch extends AuthorSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorControllerSearch.searchById(SQL_AUTHOR_SEARCH.CARGAR,parametro, res);
    } 
}
const authorControllerSearch = new AuthorControllerSearch();
export default authorControllerSearch;