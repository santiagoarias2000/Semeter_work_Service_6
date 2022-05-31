"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/editorialDaos/Create"));
const sql_create_1 = require("../../repository/editorialsRepository/sql_create");
class EditorialControllerCreate extends Create_1.default {
    createMeCustomer(req, res) {
        const name = req.body.name;
        const contry = req.body.lastname;
        const phone = req.body.address;
        const parameter = [name, contry, phone];
        EditorialControllerCreate.createEditorial(sql_create_1.SQL_EDITORIALS_CREATE.CONFIRM, sql_create_1.SQL_EDITORIALS_CREATE.CREATE, parameter, res);
    }
}
const editorialControllerCreate = new EditorialControllerCreate();
exports.default = editorialControllerCreate;
