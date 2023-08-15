import { pool } from "../database/databaseConnection.js";

export const getAllPostController = async (req, res) => {
  try {
    const posts = await pool.query(
      "select distinct (select count(*) as comment from comments c where c.post = p.post_id), (select count(*) as likes from likes l where l.post = p.post_id ), p.*, u.firstname, u.lastname from posts p join users u on u.id = p.owner_id"
    );

    res.status(200).json({ response: posts.rows });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
