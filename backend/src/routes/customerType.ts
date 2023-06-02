import express, {Router} from "express"
import CustomerTypeController from "../controllers/customerTypeController";
import {body, param, query} from "express-validator";
import validationError from "../middlewares/validationError";

const customerType: Router = express.Router();

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
    param("customerTypeUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

const createParamVerify = [
    body("name")
        .isLength({min: 1, max: 10})
        .withMessage("name长度不对"),
    body("parentUid")
        .isLength({min: 32, max: 32})
        .withMessage("parentUid长度不对"),
    validationError
]

const updateParamVerify = [
    param("customerTypeUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    body("name")
        .isLength({min: 1, max: 10})
        .withMessage("name长度不对"),
    body("parentUid")
        .isLength({min: 32, max: 32})
        .withMessage("parentUid长度不对"),
    validationError
]

const deleteParamVerify = [
    param("customerTypeUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

customerType.get("/", CustomerTypeController.getAll)
customerType.get("/:customerTypeUid", getSingleParamVerify, CustomerTypeController.getSingle)
customerType.post("/", createParamVerify, CustomerTypeController.create)
customerType.put("/:customerTypeUid", updateParamVerify, CustomerTypeController.update)
customerType.delete("/:customerTypeUid", deleteParamVerify, CustomerTypeController.delete)

export default customerType 