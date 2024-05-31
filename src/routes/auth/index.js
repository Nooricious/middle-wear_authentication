import { Router } from "express";
import AuthController from "../../controller/auth/index.js";
import StudentController from "../../controller/auth/index.js";
import AuthenticateMiddleware from "../../middleware/auth.js";

const authRouter = Router();
authRouter.post("/auth/signUp", AuthController.signup);
authRouter.post("/auth/signIn", AuthController.signIn);

export default authRouter;
