export const SQL_LOAN_SEARCH = {
    CARGAR: 'SELECT id_loan ,id_customer, description, start_date  \
    FROM loans WHERE id_loan = $1',
}