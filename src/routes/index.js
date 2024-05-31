import authRouter from "./auth/index.js";
import classRoutes from "./class/index.js";
import categoryRouter from "./product/category.js";
import productRouter from "./product/index.js";
import salesRouter from "./sales/index.js";
import studentRouter from "./student/index.js";
import teacherRoutes from "./teacher/index.js";

const allRoutes = [
  authRouter,
  studentRouter,
  teacherRoutes,
  classRoutes,
  salesRouter,
  categoryRouter,
  productRouter,
];

export default allRoutes;
