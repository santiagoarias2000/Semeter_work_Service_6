export const SQL_EDITORIAL_ID_BOOK={
    SQL: "SELECT boo.title, p.name \
    FROM books boo \
    INNER JOIN editorials p \
    ON boo.id_editorial = p.id_editorial \
    WHERE boo.id_book=$1"

}