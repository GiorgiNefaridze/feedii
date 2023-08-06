import pg from "pg";
import { config } from "dotenv";

config();

export const pool = new pg.Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: "pillu",
});
