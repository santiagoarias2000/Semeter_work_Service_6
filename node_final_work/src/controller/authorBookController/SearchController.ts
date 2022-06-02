import { Request, Response } from "express";
import AuthorBookSearch from "../../daos/authorBookDaos/Search";
import { SQL_AUTHOR_BOOK_SEARCH } from "../../repository/authorBookRepository/sql_search";

class AuthorBookControllerSearch extends AuthorBookSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        AuthorBookControllerSearch.searchById(SQL_AUTHOR_BOOK_SEARCH.CARGAR,parametro, res);
    } 
}
const authorBookControllerSearch = new AuthorBookControllerSearch();
export default authorBookControllerSearch;