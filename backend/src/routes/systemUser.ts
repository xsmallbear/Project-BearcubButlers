import express, {Router} from "express"
import {body} from 'express-validator'
import SystemUserController from "../controllers/systemUserController"
import validationError from "../middlewares/validationError"

const verify: Router = express.Router()

/**
 * 注册参数验证
 * @param req 
 * @param res 
 * @param next 
 */
const registerParemVerify = [
    body("id")
        .notEmpty()
        .withMessage("id不能为空"),
    body("userName")
        .matches(/^[a-zA-Z][a-zA-Z-0-9]*$/)
        .withMessage("userName格式错误")
        .isLength({ min: 6, max: 15 })
        .withMessage("userName长度不对"),
    body("password")
        .isLength({ min: 6, max: 16 })
        .withMessage("password长度不对"),
    body("realName"),
    body("phone")
        .optional({ values: "falsy" })
        .isMobilePhone("zh-CN")
        .withMessage("phone格式错误"),
    body("email")
        .optional({ values: "falsy" })
        .isEmail()
        .withMessage("email格式错误"),
    validationError
]

/**
 * 登入参数验证
 * @param req 
 * @param res 
 * @param next 
 */
const loginParemVerify = [
    body("userName")
        .matches(/^[a-zA-Z][a-zA-Z-0-9]*$/)
        .withMessage("userName格式错误")
        .isLength({ min: 6, max: 15 })
        .withMessage("userName长度不对"),
    body("password").isLength({ min: 6, max: 16 })
        .withMessage("password长度不对"),
    validationError
]

/**
 * 修改密码参数验证
 * @param req 
 * @param res 
 * @param next 
 */
const updatePasswordParemVerify = [
    body("userName")
        .matches(/^[a-zA-Z][a-zA-Z-0-9]*$/)
        .withMessage("userName格式错误")
        .isLength({ min: 6, max: 15 })
        .withMessage("userName长度不对"),
    body("oldPassword").isLength({ min: 6, max: 16 })
        .withMessage("oldPassword长度不对"),
    body("newPassword").isLength({ min: 6, max: 16 })
        .withMessage("newPassword长度不对"),
    validationError
]


verify.post("/register", registerParemVerify, SystemUserController.register)
verify.post("/login", loginParemVerify, SystemUserController.login)
verify.post("/updatePwd", updatePasswordParemVerify, SystemUserController.updatePassword)

export default verify