"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTHOR_BOOK_SEARCH = void 0;
exports.SQL_AUTHOR_BOOK_SEARCH = {
    CARGAR: 'SELECT id_author_book, id_book, id_author  \
    FROM authors_books WHERE id_author_book = $1',
};
