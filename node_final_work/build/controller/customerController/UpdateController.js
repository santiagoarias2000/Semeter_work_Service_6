"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/customerDaos/Update"));
const sql_update_1 = require("../../repository/customerRepository/sql_update");
class CustomerControllerUpdate extends Update_1.default {
    updateCustomer(req, res) {
        const cod = req.body.cod;
        const identification = req.body.identification;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const address = req.body.address;
        const phonenumber = req.body.phonenumber;
        const parameter = [cod, identification, name, lastname, address, phonenumber];
        CustomerControllerUpdate.updateCustomer(sql_update_1.SQL_CUSTOMER_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const customerControllerUpdate = new CustomerControllerUpdate();
exports.default = customerControllerUpdate;
