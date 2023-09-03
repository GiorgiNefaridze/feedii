import { pool } from "../database/databaseConnection.js";

export const updateProfileController = async (req, res) => {
  try {
    const { firstName, lastName, password, confirmPassword, user_id } =
      req.body;

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const updateProfile = await pool.query(
      "update users set firstname = $1, lastname = $2, password = $3 where id = $4 returning *",
      [firstName, lastName, password, user_id]
    );

    if (Object.keys(updateProfile.rows?.[0]).length) {
      res.status(201).json({ response: updateProfile.rows[0] });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
