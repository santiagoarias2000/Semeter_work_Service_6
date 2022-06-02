import { Request, Response } from "express";
import BookSearch from "../../daos/bookDaos/Search";
import { SQL_BOOK_SEARCH } from "../../repository/bookRepository/sql_search";

class BookControllerSearch extends BookSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookControllerSearch.searchById(SQL_BOOK_SEARCH.CARGAR,parametro, res);
    } 
}
const bookControllerSearch = new BookControllerSearch();
export default bookControllerSearch;