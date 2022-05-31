import { Request, Response } from "express";
import CustomerDelete from "../../daos/customerDaos/Delete";
import { SQL_CUSTOMER_DELETE } from "../../repository/customerRepository/sql_delete";

class CustomerControllerDelete extends CustomerDelete{
    public deleteCustomer(req: Request, res: Response): void{
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CustomerControllerDelete.deleteById(SQL_CUSTOMER_DELETE.DELETE,parametro, res);
    }
}
const customerControllerDelete = new CustomerControllerDelete();
export default customerControllerDelete;