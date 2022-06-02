import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class DetailLoanDelete {
    protected static async deleteById(sqlSearch: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlSearch, params)
            .then((dato)=>{
                    console.log(dato);
                return res.status(200).json({answer:  dato.rowCount, msg: 'Success delete.'});
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error to delete from DetailLoanDelete.ts'});
            });
    }
}
export default DetailLoanDelete;