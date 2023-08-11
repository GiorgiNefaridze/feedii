import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";

export const createPostController = async (req, res) => {
  try {
    const { content, cover, date, owner_id } = req.body;

    const isValid = isValidInputs([content, cover, date]);

    if (isValid) {
      const createPost = await pool.query(
        "insert into posts (content,cover,date,owner_id) values ($1,$2,$3,$4) returning *",
        [content, "image url from cloud", date, owner_id]
      );

      if (Object.keys(createPost)?.length) {
        res.status(201).json({ response: "Post created successfully 🎊" });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Too short content");
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
