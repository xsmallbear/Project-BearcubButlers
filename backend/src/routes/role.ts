import express, {Router} from "express"
import RoleController from "../controllers/roleController";
import validationError from "../middlewares/validationError";
import {body, param, query} from "express-validator";

const role: Router = express.Router();

const getAllParamVerify = [
    query("limit")
        .isNumeric()
        .withMessage("limit格式错误"),
    query("offset")
        .isNumeric()
        .withMessage("offset格式错误"),
    validationError
]

const getSingleParamVerify = [
    param("roleUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

const createParamVerify = [
    body("name")
        .isLength({min: 1, max: 20})
        .withMessage("name长度错误"),
    validationError
]

const updateParamVerify = [
    param("roleUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    body("name")
        .isLength({min: 1, max: 20})
        .withMessage("name长度错误"),
    validationError
]

const deleteParamVerify = [
    param("roleUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

role.get("/", getAllParamVerify, RoleController.getAll)
role.get("/:roleUid", getSingleParamVerify, RoleController.getSingle)
role.post("/", createParamVerify, RoleController.create)
role.put("/:roleUid", updateParamVerify, RoleController.update)
role.delete("/:roleUid", deleteParamVerify, RoleController.delete)

export default role