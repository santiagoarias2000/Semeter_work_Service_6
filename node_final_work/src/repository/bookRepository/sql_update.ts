export const SQL_BOOK_UPDATE = {
    ACTUALIZAR: "UPDATE books SET title=$2,code=$3,id_editorial=$4,isbn=$5,publication_date=$6\
    WHERE id_book=$1"
}