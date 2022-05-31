"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("../../daos/customerDaos/Delete"));
const sql_delete_1 = require("../../repository/customerRepository/sql_delete");
class CustomerControllerDelete extends Delete_1.default {
    deleteCustomer(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        CustomerControllerDelete.deleteById(sql_delete_1.SQL_CUSTOMER_DELETE.DELETE, parametro, res);
    }
}
const customerControllerDelete = new CustomerControllerDelete();
exports.default = customerControllerDelete;
