import pool from "../db";

interface User {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
}

export const getUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0] || null;
};

export const createUser = async (user: User): Promise<User> => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [user.name, user.email],
  );
  return result.rows[0];
};

export const updateUser = async (
  id: number,
  user: Partial<User>,
): Promise<User | null> => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [user.name, user.email, id],
  );
  return result.rows[0] || null;
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};
