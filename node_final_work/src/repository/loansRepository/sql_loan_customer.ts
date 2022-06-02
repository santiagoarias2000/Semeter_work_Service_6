export const SQL_LOAN_CUSTOMER ={
    SQL: "SELECT ls.description, customers.name\
    FROM loans ls\
    INNER JOIN customers ON customers.id_customer = ls.id_customer\
    WHERE ls.id_loan = $1"
}