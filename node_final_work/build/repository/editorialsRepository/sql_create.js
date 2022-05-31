"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIALS_CREATE = void 0;
exports.SQL_EDITORIALS_CREATE = {
    CREATE: 'INSERT INTO editorials(name, country, phone) \
    VALUES($1, $2, $3) \
     RETURNING id_editorial',
    CONFIRM: 'SELECT COUNT(pr.id_editorial) AS amount \
    FROM editorials pr \
    WHERE (pr.name) = lower($1);',
};
