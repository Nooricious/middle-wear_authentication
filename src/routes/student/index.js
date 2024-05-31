import { Router } from "express";
import StudentController from "../../controller/student/index.js";
import AuthenticateMiddleware from "../../middleware/auth.js";

const studentRouter = Router();
studentRouter.get(
  "/students",
  AuthenticateMiddleware,
  StudentController.getAll
);

studentRouter.post("/student", StudentController.create);

studentRouter.get("/student/:id", StudentController.getSingle);

studentRouter.put("/student/:id", StudentController.update);

studentRouter.delete("/student/:id", StudentController.delete);

export default studentRouter;
