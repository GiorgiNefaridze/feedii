import { pool } from "../database/databaseConnection.js";

export const getCommentsController = async (req, res) => {
  try {
    const { post_id } = req.params;

    const comments = await pool.query(
      "select c.comment, u.firstname,u.lastname from comments c join users u on c.owner = u.id where c.post = $1",
      [post_id]
    );

    res.status(200).json({ response: comments.rows });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
