import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";

import AuthRoute from "./routes/authRoute.js";
import PostRoute from "./routes/postRoute.js";

config();

const app = express();
const port = process.env.PORT ?? 3003;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(json());

app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute);

app.listen(port, () => console.log(`Server is running on ${port} port `));
