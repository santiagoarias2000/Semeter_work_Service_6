"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/authorBookController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/authorBookController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/authorBookController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/authorBookController/ToListController"));
class AuthorBookRoutes {
    constructor() {
        this.routesApiAuthorBook = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAuthorBook.get('/view', ToListController_1.default.getMeAuthorBook);
        this.routesApiAuthorBook.post('/create', CreateContoller_1.default.createMeAuthorBook);
        this.routesApiAuthorBook.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiAuthorBook.delete('/delete/:elCodigo', DeleteController_1.default.deleteCustomer);
    }
}
const authorBookRoutes = new AuthorBookRoutes();
exports.default = authorBookRoutes.routesApiAuthorBook;
