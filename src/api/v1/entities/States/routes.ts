import { Router } from "express";
import { getAllStates } from "./controllers";

const router = Router();

router.get("/", getAllStates);

export = router;