"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.then((r) => r.getConnection().then((connection) => {
    r.releaseConnection(connection);
    console.log('Conexion exitosa.');
}));
/*Este fichero crea la conexion con la base de datos y le devuelve la API una conexion con la que puede trabajar*/
exports.default = pool;
