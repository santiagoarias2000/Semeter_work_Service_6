import { Request, Response } from "express";
import CustomerCreate from "../../daos/customerDaos/Create";
import { SQL_CUSTOMERS_CREATE } from "../../repository/customerRepository/sql_create"

class CustomerControllerCreate extends CustomerCreate {
    public createMeCustomer(req: Request, res: Response): void {
        const identification = req.body.identification;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const address = req.body.address;
        const phonenumber = req.body.phonenumber;
        const parameter = [identification, name, lastname, address, phonenumber];
        CustomerControllerCreate.createCustomer(SQL_CUSTOMERS_CREATE.CONFIRM, SQL_CUSTOMERS_CREATE.CREATE, parameter, res);
    }
}
const customerControllerCreate = new CustomerControllerCreate();
export default customerControllerCreate;