export const SQL_AUTHOR_CREATE = {
    CREATE:'INSERT INTO authors(name,lastname,description,nationality) \
    VALUES($1, $2, $3, $4) \
    RETURNING id_author',
    CONFIRM:'SELECT COUNT(pr.id_author_book) AS amount \
    FROM authors_book pr \
    WHERE (pr.book) = lower($1)',

}