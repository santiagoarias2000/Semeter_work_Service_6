"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/loansController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/loansController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/loansController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/loansController/ToListController"));
class LoansRoutes {
    constructor() {
        this.routesApiLoans = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiLoans.get('/view', ToListController_1.default.getMeCustomer);
        this.routesApiLoans.post('/create', CreateContoller_1.default.createMeCustomer);
        this.routesApiLoans.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiLoans.delete('/delete/:elCodigo', DeleteController_1.default.deleteCustomer);
    }
}
const loansRoutes = new LoansRoutes();
exports.default = loansRoutes.routesApiLoans;
