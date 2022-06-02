export const SQL_DETAIL_LOAN_CREATE = {
    CREATE:'INSERT INTO details_loans(id_book,id_loan,deliver_date,description,overdue_day,return_date) \
    VALUES($1, $2, $3, $4, $5) \
    RETURNING id_detail_loan',
    CONFIRM:'SELECT COUNT(pr.id_detail_loan) AS amount \
    FROM details_loans pr \
    WHERE (pr.description) = lower($1)',

}