import { pool } from "../database/databaseConnection.js";

export const removeLikeController = async (req, res) => {
  try {
    const { post_id, user_id } = req.query;

    await pool.query("delete from likes where owner = $1 and post = $2", [
      user_id,
      post_id,
    ]);

    res.status(201).json({ response: "Like removed successfully" });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
