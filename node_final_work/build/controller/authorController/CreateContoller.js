"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Create_1 = __importDefault(require("../../daos/authorDaos/Create"));
const sql_create_1 = require("../../repository/authorRepository/sql_create");
class AuthorControllerCreate extends Create_1.default {
    createMeCustomer(req, res) {
        const name = req.body.name;
        const lastname = req.body.lastname;
        const description = req.body.description;
        const nationality = req.body.nationality;
        const parameter = [name, lastname, description, nationality];
        AuthorControllerCreate.createAuthor(sql_create_1.SQL_AUTHOR_CREATE.CONFIRM, sql_create_1.SQL_AUTHOR_CREATE.CREATE, parameter, res);
    }
}
const authorControllerCreate = new AuthorControllerCreate();
exports.default = authorControllerCreate;
