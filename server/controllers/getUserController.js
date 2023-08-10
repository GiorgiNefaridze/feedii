import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";
import { verifyJwt } from "../utils/verifyJwt.js";

export const getUserController = async (req, res) => {
  try {
    const { token } = req.params;

    const isValid = isValidInputs([token]);

    if (isValid) {
      const userId = verifyJwt(token);
      
    } else {
      res.status(500).json({ response: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
