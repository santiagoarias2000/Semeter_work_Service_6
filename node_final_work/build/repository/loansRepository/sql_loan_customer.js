"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LOAN_CUSTOMER = void 0;
exports.SQL_LOAN_CUSTOMER = {
    SQL: "SELECT ls.description, customers.name\
    FROM loans ls\
    INNER JOIN customers ON customers.id_customer = ls.id_customer\
    WHERE ls.id_loan = $1"
};
