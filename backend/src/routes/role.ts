import express, {Router} from "express"
import RoleController from "../controllers/RoleController";
import validationError from "../middlewares/validationError";
import {body} from "express-validator";

const role: Router = express.Router();

const createParamVerify = [
    body("name")
        .isLength({min: 1, max: 20})
        .withMessage("name长度错误"),
    validationError
]

role.get("/", RoleController.getAll)
role.get("/:roleUid", RoleController.getSingle)
role.post("/", createParamVerify, RoleController.create)
role.put("/:roleUid", RoleController.update)
role.delete("/:roleUid", RoleController.delete)

export default role