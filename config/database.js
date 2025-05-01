import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database :'teste'
    
});

try {
    await connection.execute ('select 1')
    console.log ('conexão Estabelecida')
} catch (erro) {
    console.log ('Erro ao se conectar com o banco de dados', erro);
};

export default connection;