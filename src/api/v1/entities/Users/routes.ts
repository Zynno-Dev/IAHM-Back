import { Router } from "express";
import { createUser, deleteUser, getUsers, logIn, updateUser } from "./controllers";
import { adminRoleValidator, jwtValidator, validRole } from "../../middlewares";

const router = Router();

router.get("/", getUsers);

router.post("/signIn", logIn)

router.post("/create", [jwtValidator, adminRoleValidator, validRole], createUser);

router.patch("/update/:user_id", [jwtValidator, adminRoleValidator, validRole], updateUser);

router.delete("/delete/:user_id", [jwtValidator, adminRoleValidator, validRole], deleteUser);



export = router;