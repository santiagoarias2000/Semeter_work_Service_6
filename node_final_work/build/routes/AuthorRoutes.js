"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/authorController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/authorController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/authorController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/authorController/ToListController"));
class AuthorRoutes {
    constructor() {
        this.routesApiAuthor = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAuthor.get('/view', ToListController_1.default.getMeCustomer);
        this.routesApiAuthor.post('/create', CreateContoller_1.default.createMeCustomer);
        this.routesApiAuthor.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiAuthor.delete('/delete/:elCodigo', DeleteController_1.default.deleteCustomer);
    }
}
const authorRoutes = new AuthorRoutes();
exports.default = authorRoutes.routesApiAuthor;
