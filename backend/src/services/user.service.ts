import mysql, { MysqlError } from 'mysql';
import { User } from '../types/user';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'edepcheckdb',
  connectionLimit: 100,
});

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `users`", (error, results) => {
      if (error) return reject(error.message);
      resolve(results as User[]);
    });
  });
};

export const getUserById = async (id: number): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
      if (error) return reject(error.message);
      resolve(results.length > 0 ? results[0] : null);
    });
  });
};


export const insertUser = async (userData: User): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const query = "INSERT INTO `users` (`fullname`, `email`, `username`, `password`) VALUES (?, ?, ?, ?)";
    const values = [userData.fullName, userData.email, userData.username, userData.password];

    pool.query(query, values, (error: MysqlError | null) => {
      if (error) return reject(error.message);
      resolve();
    });
  });
};

export const loginUser = async (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    pool.query(query, [email, password], (error, results) => {
      if (error) return reject(error.message);
      resolve(results.length > 0 ? results[0] : null);
    });
  });
};
