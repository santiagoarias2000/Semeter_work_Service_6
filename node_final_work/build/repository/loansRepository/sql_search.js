"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LOAN_SEARCH = void 0;
exports.SQL_LOAN_SEARCH = {
    CARGAR: 'SELECT id_loan ,id_customer, description, start_date  \
    FROM loans WHERE id_loan = $1',
};
