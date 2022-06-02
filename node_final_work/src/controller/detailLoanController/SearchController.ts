import { Request, Response } from "express";
import DetailLoanSearch from "../../daos/detailLoanDaos/Search";
import { SQL_DETAIL_LOAN_SEARCH } from "../../repository/detailsLoansRepository/sql_search";

class DetailLoanControllerSearch extends DetailLoanSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        DetailLoanControllerSearch.searchById(SQL_DETAIL_LOAN_SEARCH.CARGAR,parametro, res);
    } 
}
const detailLoanControllerSearch = new DetailLoanControllerSearch();
export default detailLoanControllerSearch;