"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIAL_SEARCH = void 0;
exports.SQL_EDITORIAL_SEARCH = {
    CARGAR: 'SELECT id_editorial, name, country, phone \
    FROM editorials WHERE id_editorial = $1',
};
