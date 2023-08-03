import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

import AuthRoute from "./routes/authRoute.js";

config();

const app = express();
const port = process.env.PORT ?? 3003;

app.use(cors());
app.use(json());

app.use("/api/auth", AuthRoute);

app.listen(port, () => console.log(`Server is running on ${port} port `));
