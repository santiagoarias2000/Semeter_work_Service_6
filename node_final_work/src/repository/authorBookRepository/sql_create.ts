export const SQL_AUTHOR_BOOK_CREATE = {
    CREATE:'INSERT INTO authors_books(id_book, id_author) \
    VALUES($1, $2) \
    RETURNING id_author_book',
    CONFIRM:'SELECT COUNT(pr.id_author) AS amount \
    FROM authors pr \
    WHERE (pr.name) = lower($1)',

}