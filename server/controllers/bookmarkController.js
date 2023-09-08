import { pool } from "../database/databaseConnection.js";

export const bookmarkController = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;

    if (post_id && user_id) {
      const savePost = await pool.query(
        "insert into bookmarks (post_id,owner_id) values ($1,$2) returning *",
        [post_id, user_id]
      );

      if (!Object.keys(savePost.rows[0]).length) {
        throw new Error("Something went wrong");
      }

      res.status(200).json({ response: "Saved successfully" });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
