import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";

export const createCommentController = async (req, res) => {
  try {
    const { owner_id, post_id, comment } = req.body;

    const isValid = isValidInputs([comment]);

    if (isValid && owner_id && post_id) {
      const createdComment = await pool.query(
        "insert into comments (owner,post,comment) values ($1,$2,$3) returning *",
        [owner_id, post_id, comment]
      );

      if (createdComment.rows?.length > 0) {
        res.status(201).json({ response: "Comment has been added 💬" });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Enter valid comment");
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
