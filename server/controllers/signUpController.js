import { isValidInputs } from "../utils/isValidInputs.js";
import { pool } from "../database/databaseConnection.js";
import { hashInput } from "../utils/hashInput.js";

export const signUpController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, secret } = req.body;

    const isValid = isValidInputs([
      firstName,
      lastName,
      email,
      password,
      secret,
    ]);

    if (isValid) {
      const isExists = await pool.query(
        "select exists (select * from users where email = $1)",
        [email]
      );

      if (isExists.rows[0]?.exists) {
        throw new Error("Email is already used👀");
      }

      const hashedPassword = await hashInput(password);
      const hashedSecret = await hashInput(secret);

      const newUser = await pool.query(
        "insert into users (firstName, lastName,email,password,secret) values ($1,$2,$3,$4,$5) returning *",
        [firstName, lastName, email, hashedPassword, hashedSecret]
      );

      if (Object.keys(newUser?.rows[0])?.length > 1) {
        res.status(201).json({ response: "User created successfully 🥳" });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Enter valid credentials");
    }
  } catch (error) {
    res.status(500).json({ response: error?.message });
  }
};
