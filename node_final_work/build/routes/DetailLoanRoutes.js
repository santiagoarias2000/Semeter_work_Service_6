"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateContoller_1 = __importDefault(require("../controller/detailLoanController/CreateContoller"));
const DeleteController_1 = __importDefault(require("../controller/detailLoanController/DeleteController"));
const SearchController_1 = __importDefault(require("../controller/detailLoanController/SearchController"));
const ToListController_1 = __importDefault(require("../controller/detailLoanController/ToListController"));
class DetailLoanRoutes {
    constructor() {
        this.routesApiDetailLoan = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiDetailLoan.get('/view', ToListController_1.default.getMeDetailLoan);
        this.routesApiDetailLoan.post('/create', CreateContoller_1.default.createMeDetaiLoan);
        this.routesApiDetailLoan.get('/search/:elCodigo', SearchController_1.default.busqueUnoMano);
        this.routesApiDetailLoan.delete('/delete/:elCodigo', DeleteController_1.default.delete);
    }
}
const detailLoanRoutes = new DetailLoanRoutes();
exports.default = detailLoanRoutes.routesApiDetailLoan;
