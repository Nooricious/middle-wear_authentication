import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";

const teacherRoutes = Router();

teacherRoutes.get("/teachers", teacherController.getAll);

export default teacherRoutes;
