import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class BookSearch{
    protected static async searchById(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.one(sqlSearch, params)
            .then((dato)=>{
                console.log(dato);
                return res.status(200).json({answer: dato});
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error search from BookSearch'});
            });
    }
}
export default BookSearch;