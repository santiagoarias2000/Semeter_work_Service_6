"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/customerDaos/Create"));
const sql_create_1 = require("../../repository/customerRepository/sql_create");
class CustomerControllerCreate extends Create_1.default {
    createMeCustomer(req, res) {
        const identification = req.body.identification;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const address = req.body.address;
        const phonenumber = req.body.phonenumber;
        const parameter = [identification, name, lastname, address, phonenumber];
        CustomerControllerCreate.createCustomer(sql_create_1.SQL_CUSTOMERS_CREATE.CONFIRM, sql_create_1.SQL_CUSTOMERS_CREATE.CREATE, parameter, res);
    }
}
const customerControllerCreate = new CustomerControllerCreate();
exports.default = customerControllerCreate;
