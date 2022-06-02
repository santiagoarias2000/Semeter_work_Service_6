import { Request, Response } from "express";
import BookDetailSearch from "../../daos/bookDaos/DlBook";
import { SQL_DL_BOOK } from "../../repository/bookRepository/sql_dl_book";

class BookDetailControllerSearch extends BookDetailSearch{
    public busquelibro(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        BookDetailControllerSearch.searchIdDetail(SQL_DL_BOOK.SQL,parametro, res);
    } 
}
const bookDetailControllerSearch = new BookDetailControllerSearch();
export default bookDetailControllerSearch;