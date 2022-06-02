export const SQL_DETAIL_LOAN_SEARCH = {
    CARGAR: 'SELECT id_detail_loan, id_book,id_loan,deliver_date,description,overdue_day,return_date  \
    FROM details_loans WHERE id_detail_loan = $1',
}