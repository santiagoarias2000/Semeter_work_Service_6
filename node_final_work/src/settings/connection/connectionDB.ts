import { opcionesPG } from "./optionConnection";
import var_connection from "../domains/var_database";
import pgPromise from "pg-promise";

const pgp = pgPromise(opcionesPG);
const pool = pgp(var_connection);

pool.connect()
    .then((conn)=>{
        console.log('Your enter to database: ', var_connection.database);
        conn.done();
    })
    .catch((meErr) => {
        console.log(meErr);
    });

export default pool;