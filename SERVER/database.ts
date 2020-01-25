import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion exitosa.')
}));
/*Este fichero crea la conexion con la base de datos y le devuelve la API una conexion con la que puede trabajar*/
export default pool;
