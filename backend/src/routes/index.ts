import { Router } from "express";
import authRoutes from "./auth.routes";
import departmentRoutes from "./department.routes";
import employeeRoutes from "./employee.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/department", departmentRoutes);

router.use("/employee", employeeRoutes);

export default router;
