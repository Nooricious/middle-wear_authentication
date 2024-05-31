import { Router } from "express";
import classController from "../../controller/class/index.js";

const classRoutes = Router();

classRoutes.get("/classes", classController.getAll);

export default classRoutes;
