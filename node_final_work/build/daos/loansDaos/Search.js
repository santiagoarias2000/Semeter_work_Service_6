"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../settings/connection/connectionDB"));
class LoansSearch {
    static searchById(sqlSearch, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.one(sqlSearch, params)
                .then((dato) => {
                console.log(dato);
                return res.status(200).json({ answer: dato });
            })
                .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ answer: 'Error search from LoansSearch' });
            });
        });
    }
}
exports.default = LoansSearch;
