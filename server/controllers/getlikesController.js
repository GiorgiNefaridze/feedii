import { pool } from "../database/databaseConnection.js";

export const getlikesController = async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
