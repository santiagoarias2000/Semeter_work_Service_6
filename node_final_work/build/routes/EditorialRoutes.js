"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/editorialController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/editorialController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/editorialController/SearchController"));
const SearchIdBookController_1 = __importDefault(require("../controller/editorialController/SearchIdBookController"));
const ToListController_1 = __importDefault(require("../controller/editorialController/ToListController"));
class EditorialRoutes {
    constructor() {
        this.routesApiEditorial = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiEditorial.get('/view', ToListController_1.default.getMeCustomer);
        this.routesApiEditorial.post('/create', CreateContoller_1.default.createMeCustomer);
        this.routesApiEditorial.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiEditorial.delete('/delete/:elCodigo', DeleteController_1.default.deleteCustomer);
        this.routesApiEditorial.get('/searchId/:elCodigo', SearchIdBookController_1.default.busqueId);
    }
}
const editorialRoutes = new EditorialRoutes();
exports.default = editorialRoutes.routesApiEditorial;
