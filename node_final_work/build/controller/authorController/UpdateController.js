"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Update_1 = __importDefault(require("../../daos/authorDaos/Update"));
const sql_update_1 = require("../../repository/authorRepository/sql_update");
class AuthorControllerUpdate extends Update_1.default {
    updateAuthor(req, res) {
        const cod = req.body.cod;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const description = req.body.description;
        const nationality = req.body.nationality;
        const parameter = [cod, name, lastname, description, nationality];
        AuthorControllerUpdate.updateAuthor(sql_update_1.SQL_AUTHOR_UPDATE.ACTUALIZAR, parameter, res);
    }
}
const authorControllerUpdate = new AuthorControllerUpdate();
exports.default = authorControllerUpdate;
