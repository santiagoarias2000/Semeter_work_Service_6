"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTHOR_BOOK_UPDATE = void 0;
exports.SQL_AUTHOR_BOOK_UPDATE = {
    ACTUALIZAR: "UPDATE authors_books SET id_book=$2, id_author=$3\
    WHERE id_author=$1"
};
