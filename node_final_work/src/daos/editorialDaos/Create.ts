import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class EditorialCreate{
    public static async createEditorial(sqlConfirm: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool.task(async consult => {
            //.one retorna muchos datos
            const data = await consult.one(sqlConfirm, parameter);
            if (data.amount == 0) {
                return await consult.one(sqlCreate, parameter);
            } else {
                return {id_editorial : 0 };
            };
        })
            .then((response) => {
                if (response?.id_editorial != 0) {
                    res.status(200).json({ answer: 'Create customer', newCode: response?.id_editorial });
                } else {
                    res.status(402).json({ answer: 'Error create register it is repeated' })
                };
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error in create from editorial.' });
            });
    } 
}
export default EditorialCreate;