import { Response, Request } from "express";
import CustomerUpdate from "../../daos/customerDaos/Update";
import { SQL_CUSTOMER_UPDATE } from "../../repository/customerRepository/sql_update";

class CustomerControllerUpdate extends CustomerUpdate{
    public updateCustomer(req: Request, res: Response): void {
        const cod = req.body.cod;
        const identification = req.body.identification;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const address = req.body.address;
        const phonenumber = req.body.phonenumber;
        const parameter = [cod, identification, name, lastname, address, phonenumber];
        CustomerControllerUpdate.updateCustomer(SQL_CUSTOMER_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const customerControllerUpdate = new CustomerControllerUpdate();
export default customerControllerUpdate;