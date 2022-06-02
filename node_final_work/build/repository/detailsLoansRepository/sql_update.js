"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAIL_LOAN_UPDATE = void 0;
exports.SQL_DETAIL_LOAN_UPDATE = {
    ACTUALIZAR: "UPDATE details_loans SET id_detail_loan=$2, id_book=$3,id_loan=$4,deliver_date=$5,description=$6,overdue_day=$7,return_date=$7\
    WHERE id_detail_loan=$1"
};
