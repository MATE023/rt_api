/*import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config;

const connection = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    console.log('DB connected');
    return db;
  } catch (error) {
    console.log('Error connecting db')
    throw error;
  }
};

export default connection;*/