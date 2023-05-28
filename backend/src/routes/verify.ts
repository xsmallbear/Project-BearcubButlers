import express, { Router, Request, Response } from "express"
import SystemUserController from "../controllers/systemUserController"
const verify: Router = express.Router()

//注册
verify.post("/register", SystemUserController.register)

//登入
verify.post("/login", SystemUserController.login)

export default verify