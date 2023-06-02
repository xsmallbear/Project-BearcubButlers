import express, {Router} from "express"
import {body, param} from 'express-validator'
import SupplierTypeController from "../controllers/supplierTypeController";
import validationError from "../middlewares/validationError";

const supplierType: Router = express.Router();

const getSingleByUidParamVerify = [
    param("supplierTypeUid")
        .isLength({ min: 32, max: 32 })
        .withMessage("uid格式错误"),
    validationError
]

const createParamVerify = [
    body("name")
        .isLength({ min: 1, max: 10 })
        .withMessage("name长度不对"),
    body("parentUId")
        .isLength({ min: 32, max: 32 })
        .withMessage("parentUId长度不对"),
    validationError
]

const updateParamVerify = [
    param("supplierTypeUid")
        .isLength({ min: 32, max: 32 })
        .withMessage("uid格式错误"),
    body("name")
        .isLength({ min: 1, max: 10 })
        .withMessage("name长度不对"),
    body("parentUId")
        .isLength({ min: 32, max: 32 })
        .withMessage("parentUId长度不对"),
    validationError
]


const deleteParamVerify = [
    param("supplierTypeUid")
        .isLength({ min: 32, max: 32 })
        .withMessage("uid格式错误"),
    validationError
]

supplierType.get("/", SupplierTypeController.getAll)
supplierType.get("/:supplierTypeUid", getSingleByUidParamVerify, SupplierTypeController.getSingleByUid)
supplierType.post("/", createParamVerify, SupplierTypeController.create)
supplierType.put("/:supplierTypeUid", updateParamVerify, SupplierTypeController.update)
supplierType.delete("/:supplierTypeUid", deleteParamVerify, SupplierTypeController.delete)


export default supplierType