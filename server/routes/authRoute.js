import { Router } from "express";

import { loginController } from "../controllers/loginController.js";
import { signUpController } from "../controllers/signUpController.js";
import { resetPasswordController } from "../controllers/resetPasswordController.js";

const router = Router();

router.post("/login", loginController);

router.post("/sign-up", signUpController);

router.post("/reset-password", resetPasswordController);

export default router;
