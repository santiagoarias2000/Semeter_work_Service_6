"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const CustomerRoutes_1 = __importDefault(require("../../routes/CustomerRoutes"));
const EditorialRoutes_1 = __importDefault(require("../../routes/EditorialRoutes"));
const AuthorRoutes_1 = __importDefault(require("../../routes/AuthorRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activeRoute() {
        this.app.use('/api/customer', CustomerRoutes_1.default);
        this.app.use('/api/editorial', EditorialRoutes_1.default);
        this.app.use('/api/author', AuthorRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('It works', this.app.get('PORT'));
        });
    }
}
exports.default = Server;
