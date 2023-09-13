import { pool } from "../database/databaseConnection.js";

export const getAllBookmark = async (req, res) => {
  try {
    const { id } = req.params;

    const bookmarkedPosts = await pool.query(
      "select p.*, u.firstname,u.lastname,u.id from bookmarks b join users u on u.id = b.owner_id join posts p on p.post_id = b.post_id where u.id = $1",
      [id]
    );

    res.status(200).json({ response: bookmarkedPosts.rows });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
