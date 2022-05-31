"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIAL_UPDATE = void 0;
exports.SQL_EDITORIAL_UPDATE = {
    ACTUALIZAR: "UPDATE editorials SET name = $2, contry = $3,phone = $4 \
    WHERE id_editorial=$1"
};
