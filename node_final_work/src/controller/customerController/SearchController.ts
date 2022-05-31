import { Request, Response } from "express";
import CustomerSearch from "../../daos/customerDaos/Search";
import { SQL_CUSTOMERA_SEARCH } from "../../repository/customerRepository/sql_search";

class CustomerControllerSearch extends CustomerSearch{
    public busqueUnoMano(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CustomerControllerSearch.searchById(SQL_CUSTOMERA_SEARCH.CARGAR,parametro, res);
    } 
}
const customerControllerSearch = new CustomerControllerSearch();
export default customerControllerSearch;