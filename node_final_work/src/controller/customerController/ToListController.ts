import { Request, Response } from "express";
import CustomerToList from "../../daos/customerDaos/ToListo";
import { SQL_CUSTOMER_VIEW } from "../../repository/customerRepository/sql_toList";

class CustomerControllerGet extends CustomerToList{
    public getMeCustomer(req: Request, res: Response): void{
        CustomerControllerGet.getCustomers(SQL_CUSTOMER_VIEW.VIEW, [], res);
    } 
}
const customerControllerGet = new CustomerControllerGet();
export default customerControllerGet;