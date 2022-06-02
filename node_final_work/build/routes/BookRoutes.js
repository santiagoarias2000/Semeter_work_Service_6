"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/bookController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/bookController/DeleteController"));
const dlBookController_1 = __importDefault(require("../controller/bookController/dlBookController"));
const SearchController_1 = __importDefault(require("../controller/bookController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/bookController/ToListController"));
class BookRoutes {
    constructor() {
        this.routesApiBook = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiBook.get('/view', ToListController_1.default.getMeBook);
        this.routesApiBook.post('/create', CreateContoller_1.default.createMeBook);
        this.routesApiBook.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiBook.delete('/delete/:elCodigo', DeleteController_1.default.deleteBook);
        this.routesApiBook.get('/detailBook/:elCodigo', dlBookController_1.default.busquelibro);
    }
}
const bookRoutes = new BookRoutes();
exports.default = bookRoutes.routesApiBook;
