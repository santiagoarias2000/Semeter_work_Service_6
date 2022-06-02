import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class BookCreate{
    public static async createBook(sqlConfirm: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool.task(async consult => {
            //.one retorna muchos datos
            const data = await consult.one(sqlConfirm, parameter);
            if (data.amount == 0) {
                return await consult.one(sqlCreate, parameter);
            } else {
                return {id_book : 0 };
            };
        })
            .then((response) => {
                if (response?.id_book != 0) {
                    res.status(200).json({ answer: 'Create author', newCode: response?.id_book });
                } else {
                    res.status(402).json({ answer: 'Error create register it is repeated' })
                };
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error in create from author.' });
            });
    } 
}
export default BookCreate;