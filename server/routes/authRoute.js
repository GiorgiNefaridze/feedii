import { Router } from "express";

import { loginController } from "../controllers/loginController.js";
import { signUpController } from "../controllers/signUpController.js";

const router = Router();

router.post("/login", loginController);

router.post("/sign-up", signUpController);

export default router;
