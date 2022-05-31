export const SQL_AUTHOR_UPDATE = {
    ACTUALIZAR: "UPDATE author SET name = $2,lastname = $3 ,description =$4, nationality = $5\
    WHERE id_author=$1"
}