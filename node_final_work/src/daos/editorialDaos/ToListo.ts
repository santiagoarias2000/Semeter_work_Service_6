import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class EditorialToList{
    public static async getEditorial(sqlConsult: string, parameter: any, res: Response): Promise<any> {
        await pool.result(sqlConsult, parameter)
            .then((result) => {
                res.status(200).json(result.rows);
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'does not word: EditorialToList'});
            });
    }
}
export default EditorialToList;