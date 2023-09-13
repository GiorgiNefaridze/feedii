import { pool } from "../database/databaseConnection.js";

export const removeBookmarkController = async (req, res) => {
  try {
    const { post_id, user_id } = req.query;

    await pool.query(
      "delete from bookmarks where post_id = $1 and owner_id = $2",
      [post_id, user_id]
    );
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
