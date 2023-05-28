import { Request, Response } from 'express';
import SystemUser from "../models/systemUser"
import PasswordUtil from '../utils/passwordUtil';
import ParamUtil from '../utils/paramUtil';
import SystemUserDao from '../db/systemUserDao';
import UUidUtil from '../utils/uuidUtil';
import ObjectUtil from '../utils/objectUtil';
import JwtUtil from '../utils/jwtUtil';

export default class SystemUserController {

    /**
     * 登入
     * @param req 
     * @param res 
     */
    public static async login(req: Request, res: Response) {
        const userName = req.body.userName
        const password = req.body.password
        //参数非空检查
        if (ParamUtil.validateParams({ userName, password }) === false) {
            res.send({ statu: false, message: "参数错误" })
            return
        }
        //检查是否有这个用户
        const needCheckUser = await SystemUserDao.selectSystemUserByUserName(userName);
        if (ObjectUtil.checkObjectIsNull(needCheckUser)) {
            res.send({ statu: false, message: "用户名不存在" })
            return
        }
        const user = (needCheckUser as SystemUser[])[0]
        const salt = user.passwordSalt as string
        const passwordHash = user.passwordHash as string
        const loginResult = PasswordUtil.verifyPassword(password, salt, passwordHash);

        if (loginResult == false) {
            res.send({ statu: false, message: "密码错误" })
        } else {
            //登入成功
            //jwt
            const token = JwtUtil.sign(userName)
            res.send({ statu: true, token: token })
        }
    }

    /**
     * 注册
     * @param req 
     * @param res 
     */
    public static async register(req: Request, res: Response) {

        const id: string = req.body.id;
        const userName: string = req.body.userName;
        const password: string = req.body.password;
        const realName: string = req.body.realName;
        const phone: string = req.body.phone;
        const email: string = req.body.email;

        //参数非空检查
        if (ParamUtil.validateParams({ id, userName, password }) === false) {
            res.send({ statu: false, message: "参数错误" })
            return
        }
        //检查用户名是否重复
        if (Object.keys(await SystemUserDao.selectSystemUserByUserName(userName)).length !== 0) {
            res.send({ statu: false, message: "用户名已存在" })
            return
        }
        //检查用户id是否重复
        if (Object.keys(await SystemUserDao.selectSystemUserById(id)).length !== 0) {
            res.send({ statu: false, message: "id已存在" })
            return
        }

        //密码加盐
        const { salt, hashPassword } = PasswordUtil.encryptPassword(password as string);

        const newSystemUser = new SystemUser(
            UUidUtil.generateUUID(),
            id,
            userName,
            hashPassword,
            salt,
            realName,
            password,
            email,
            new Date(),
            new Date()
        );

        SystemUserDao.insertSystemUser(newSystemUser)
        res.send({ statu: false, message: "注册成功" })
    }
}