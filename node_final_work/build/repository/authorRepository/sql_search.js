"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTHOR_SEARCH = void 0;
exports.SQL_AUTHOR_SEARCH = {
    CARGAR: 'SELECT id_author, name, lastname, description,nationality  \
    FROM authors WHERE id_author = $1',
};
