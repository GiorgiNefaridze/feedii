import { pool } from "../database/databaseConnection.js";

export const getLikedPostController = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    const isLiked = await pool.query(
      "select  count(*) from likes where owner = $1 and post = $2",
      [user_id, post_id]
    );

    if (Number(isLiked.rows[0].count) > 0) {
      res.status(200).json({ response: true });
    } else {
      res.status(200).json({ response: false });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
