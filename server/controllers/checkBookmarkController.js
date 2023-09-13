import { pool } from "../database/databaseConnection.js";

export const checkBookmarkController = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    const isSaved = await pool.query(
      "select exists (select * from bookmarks where post_id = $1 and owner_id = $2)",
      [post_id, user_id]
    );

    if (isSaved.rows[0].exists) {
      res.status(200).json({ response: true });
    } else {
      res.status(200).json({ response: false });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
