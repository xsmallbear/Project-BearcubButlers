import express, { Router } from "express"
import { body, param } from 'express-validator'
import SupplierTypeController from "../controllers/supplierTypeController";
import validationError from "../middlewares/validationError";

const suppliertype: Router = express.Router();

const getSingleByUidParamVerify = [
    param("supplierTypeUid")
        .isLength({ min: 36, max: 36 })
        .withMessage("supplierTypeUid长度不对"),
    validationError
]

const getSingleByNameParamVerify = [
    param("supplierName")
        .isLength({ min: 4, max: 8 })
        .withMessage("supplierTypeUid长度不对"),
    validationError
]

const createParamVerify = [
    body("name")
        .isLength({ min: 1, max: 10 })
        .withMessage("name长度不对"),
    body("parentUId")
        .isLength({ min: 36, max: 36 })
        .withMessage("parentUId长度不对"),
    validationError
]

suppliertype.get("/", SupplierTypeController.getAll)
suppliertype.get("/uid/:supplierTypeUid", getSingleByUidParamVerify, SupplierTypeController.getSingleByUid)
suppliertype.get("/name/:supplierName", getSingleByNameParamVerify, SupplierTypeController.getSingleByName)
suppliertype.post("/", createParamVerify, SupplierTypeController.create)
suppliertype.put("/:supplierTypeUid", SupplierTypeController.update)
suppliertype.delete("/:supplierTypeUid", SupplierTypeController.delete)


export default suppliertype 