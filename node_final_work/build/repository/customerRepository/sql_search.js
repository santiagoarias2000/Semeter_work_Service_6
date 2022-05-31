"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CUSTOMERA_SEARCH = void 0;
exports.SQL_CUSTOMERA_SEARCH = {
    CARGAR: 'SELECT id_customer, name, lastname \
    FROM customers WHERE id_customer = $1',
};
