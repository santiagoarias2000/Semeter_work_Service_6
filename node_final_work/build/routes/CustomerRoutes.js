"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/customerController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/customerController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/customerController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/customerController/ToListController"));
class CustomerRoutes {
    constructor() {
        this.routesApiCustomer = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCustomer.get('/view', ToListController_1.default.getMeCustomer);
        this.routesApiCustomer.post('/create', CreateContoller_1.default.createMeCustomer);
        this.routesApiCustomer.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiCustomer.delete('/delete/:elCodigo', DeleteController_1.default.deleteCustomer);
    }
}
const customerRoutes = new CustomerRoutes();
exports.default = customerRoutes.routesApiCustomer;
