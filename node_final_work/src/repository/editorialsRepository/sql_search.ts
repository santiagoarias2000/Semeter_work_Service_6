export const SQL_EDITORIAL_SEARCH = {
    CARGAR: 'SELECT id_editorial, name, country, phone \
    FROM editorials WHERE id_editorial = $1',
}