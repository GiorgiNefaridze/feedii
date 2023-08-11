import { Router } from "express";

import { createPostController } from "../controllers/createPostController.js";

const router = Router();

//Get all posts
router.get("/");

//Create a post
router.post("/", createPostController);

export default router;
