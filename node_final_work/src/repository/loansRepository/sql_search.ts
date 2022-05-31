export const SQL_AUTHOR_SEARCH = {
    CARGAR: 'SELECT id_author, name, lastname, description,nationality  \
    FROM authors WHERE id_author = $1',
}