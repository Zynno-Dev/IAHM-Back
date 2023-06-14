import { Router } from "express";
import { getAllNotices, getNoticeById, postNotice } from "./controllers";
import { adminRoleValidator, editorRoleValidator, jwtValidator, publicadorRoleValidator, validRole } from "../../middlewares";

const router = Router();

router.get("/", getAllNotices);

router.get("/:notice_id", getNoticeById);

router.post("/create", [jwtValidator, adminRoleValidator, publicadorRoleValidator, editorRoleValidator, validRole], postNotice);

export = router;