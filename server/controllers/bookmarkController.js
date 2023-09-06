import { pool } from "../database/databaseConnection.js";

export const bookmarkController = async (req, res) => {
  try {
    const { post_id } = req.body;
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
