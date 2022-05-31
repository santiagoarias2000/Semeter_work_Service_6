"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTHOR_UPDATE = void 0;
exports.SQL_AUTHOR_UPDATE = {
    ACTUALIZAR: "UPDATE Loans SET id_customer = $2, description=$3, start_date=$4\
    WHERE id_loan=$1"
};
