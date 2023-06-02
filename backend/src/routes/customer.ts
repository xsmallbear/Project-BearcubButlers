import express, {Router} from "express"
import CustomerController from "../controllers/customerController";
import {body, param, query} from "express-validator";
import validationError from "../middlewares/validationError";

const customer: Router = express.Router()

const getAllParamVerify = [
    query("limit")
        .optional({values: "falsy"})
        .isNumeric()
        .withMessage("limit格式错误"),
    query("offset")
        .optional({values: "falsy"})
        .isNumeric()
        .withMessage("offset格式错误"),
    validationError
]

const getSingleParamVerify = [
    param("customerUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

const createParamVerify = [
    body("id")
        .notEmpty()
        .withMessage("id不能为空"),
    body("typeUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    body("name")
        .isLength({min: 1, max: 20})
        .withMessage("name长度错误"),
    body("shortName")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("shortName长度错误"),
    body("pinyinCode")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("pinyinCode长度错误"),
    body("contact")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("contact长度错误"),
    body("phone")
        .optional({values: "falsy"})
        .isMobilePhone("zh-CN")
        .withMessage("phone格式错误"),
    body("email")
        .optional({values: "falsy"})
        .isEmail()
        .withMessage("email格式错误"),
    body("address")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 50})
        .withMessage("address长度错误"),
    body("tin")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("tin长度错误"),
    body("remark")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 200})
        .withMessage("remark长度错误"),
    validationError
]

const updateParamVerify = [
    param("customerUid")
        .isLength({min: 32, max: 32})
        .withMessage("supplierUid格式错误"),
    body("id")
        .notEmpty()
        .withMessage("id不能为空"),
    body("typeUid")
        .isLength({min: 32, max: 32})
        .withMessage("typeUid格式错误"),
    body("name")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("name长度错误"),
    body("shortName")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("shortName长度错误"),
    body("pinyinCode")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("pinyinCode长度错误"),
    body("contact")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("contact长度错误"),
    body("phone")
        .optional({values: "falsy"})
        .isMobilePhone("zh-CN")
        .withMessage("phone格式错误"),
    body("email")
        .optional({values: "falsy"})
        .isEmail()
        .withMessage("email格式错误"),
    body("address")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 50})
        .withMessage("address长度错误"),
    body("tin")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 20})
        .withMessage("tin长度错误"),
    body("remark")
        .optional({values: "falsy"})
        .isLength({min: 1, max: 200})
        .withMessage("remark长度错误"),
    validationError
]

const deleteParamVerify = [
    param("customerUid")
        .isLength({min: 32, max: 32})
        .withMessage("uid格式错误"),
    validationError
]

customer.get("/", getAllParamVerify, CustomerController.getAll)
customer.get("/:customerUid", getSingleParamVerify, CustomerController.getSingle)
customer.post("/", createParamVerify, CustomerController.create)
customer.put("/:customerUid", updateParamVerify, CustomerController.update)
customer.delete("/:customerUid", deleteParamVerify, CustomerController.delete)

export default customer 