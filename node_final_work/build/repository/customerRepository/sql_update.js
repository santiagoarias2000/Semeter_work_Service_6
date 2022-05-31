"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CUSTOMER_UPDATE = void 0;
exports.SQL_CUSTOMER_UPDATE = {
    ACTUALIZAR: "UPDATE customers SET identification = $2, name = $3, lastname = $4, address = $5, phonenumber = $6 \
    WHERE id_customer=$1    "
};
