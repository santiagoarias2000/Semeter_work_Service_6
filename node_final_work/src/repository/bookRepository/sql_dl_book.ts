export const SQL_DL_BOOK = {
    SQL: "SELECT dl.id_book, books.title \
    FROM details_loans dl\
    INNER JOIN books \
    ON books.id_book = dl.id_book \
    WHERE dl.id_detail_loan = $1"
}