import { pool } from "../database/databaseConnection.js";

export const likePostController = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;

    await pool.query(
      "insert into likes (owner,post) values ($1,$2) returning *",
      [user_id, post_id]
    );

    res.status(201).json({ response: "Liked <3 " });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
