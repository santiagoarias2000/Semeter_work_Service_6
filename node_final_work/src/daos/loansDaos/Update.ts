import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class LoansUpdate {
    public static async updateLoans(sqlUpdate: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.result(sqlUpdate, paramentros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Update data from loans', });
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error for LoansUpdate' });

            });
    }
}
export default LoansUpdate;