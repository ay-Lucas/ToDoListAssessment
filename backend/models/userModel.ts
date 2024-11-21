import pool from "../db";

interface User {
  id?: number; // Optional because it is auto-generated in the database
  name: string;
  email: string;
  created_at?: Date;
}

// Get all users from the database
export const getUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows; // Return the rows as an array of users
};

// Get a single user by their ID
export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]); // Parameterized query to prevent SQL injection
  return result.rows[0] || null; // Return the user or null if not found
};

// Create a new user in the database
export const createUser = async (user: User): Promise<User> => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", // Insert user and return the inserted record
    [user.name, user.email], // Parameters to avoid SQL injection
  );
  return result.rows[0];
};

// Update an existing user's details
export const updateUser = async (
  id: number,
  user: Partial<User>, // Use Partial to allow partial updates
): Promise<User | null> => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", // Update user and return the updated record
    [user.name, user.email, id],
  );
  return result.rows[0] || null; // Return the updated user or null if not found
};

// Delete a user by their ID
export const deleteUser = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};
