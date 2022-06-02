import { Request, Response } from "express";
import BookToList from "../../daos/bookDaos/ToListo";
import { SQL_BOOK_VIEW } from "../../repository/bookRepository/sql_toList";

class BookControllerGet extends BookToList{
    public getMeBook(req: Request, res: Response): void{
        BookControllerGet.getBook(SQL_BOOK_VIEW.VIEW, [], res);
    } 
}
const bookControllerGet = new BookControllerGet();
export default bookControllerGet;