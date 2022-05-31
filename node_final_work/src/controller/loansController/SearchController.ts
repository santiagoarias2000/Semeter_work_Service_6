import { Request, Response } from "express";
import LoansSearch from "../../daos/loansDaos/Search";
import { SQL_LOAN_SEARCH } from "../../repository/loansRepository/sql_search";

class LoansControllerSearch extends LoansSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        LoansControllerSearch.searchById(SQL_LOAN_SEARCH.CARGAR,parametro, res);
    } 
}
const loansControllerSearch = new LoansControllerSearch();
export default loansControllerSearch;