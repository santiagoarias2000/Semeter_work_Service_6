"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LOANS_CREATE = void 0;
exports.SQL_LOANS_CREATE = {
    CREATE: 'INSERT INTO loans(id_customer,description,start_date) \
    VALUES($1, $2, $3) \
    RETURNING id_loan',
    CONFIRM: 'SELECT COUNT(pr.id_loan) AS amount \
    FROM loans pr \
    WHERE (pr.description) = lower($1)',
};
