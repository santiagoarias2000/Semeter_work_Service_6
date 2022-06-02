export const SQL_BOOK_SEARCH = {
    CARGAR: 'SELECT id_book, title,code,id_editorial,isbn,publication_date  \
    FROM books WHERE id_book = $1',
}