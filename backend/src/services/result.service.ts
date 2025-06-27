import mysql, { MysqlError } from 'mysql';
import { Result } from '../types/result';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'edepcheckdb',
});


export const saveResultToDB = async (
  score: number,
  severity: string,
  userId: number
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const query = 'INSERT INTO results (user_id, score, severity) VALUES (?, ?, ?)';
    const values = [userId, score, severity];

    pool.query(query, values, (error: MysqlError | null) => {
      if (error) {
        console.error('MySQL Error:', error);
        return reject(error.message);
      }
      resolve();
    });
  });
};
