import { Router } from "express";
import { getAllRoles } from "./controllers";

const router = Router();

router.get("/getAllRoles", getAllRoles);

export = router;