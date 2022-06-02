"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_BOOK_CREATE = void 0;
exports.SQL_BOOK_CREATE = {
    CREATE: 'INSERT INTO books(title,code,id_editorial,isbn,publication_date) \
    VALUES($1, $2, $3, $4, $5) \
    RETURNING id_book',
    CONFIRM: 'SELECT COUNT(pr.id_book) AS amount \
    FROM books pr \
    WHERE (pr.tittle) = lower($1)',
};
