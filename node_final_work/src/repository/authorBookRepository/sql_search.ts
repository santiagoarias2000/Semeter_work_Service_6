export const SQL_AUTHOR_BOOK_SEARCH = {
    CARGAR: 'SELECT id_author_book, id_book, id_author  \
    FROM authors_books WHERE id_author_book = $1',
}