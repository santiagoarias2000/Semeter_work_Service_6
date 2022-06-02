"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_BOOK_SEARCH = void 0;
exports.SQL_BOOK_SEARCH = {
    CARGAR: 'SELECT id_book, title,code,id_editorial,isbn,publication_date  \
    FROM books WHERE id_book = $1',
};
