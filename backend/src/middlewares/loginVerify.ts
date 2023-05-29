import { Request, Response, NextFunction } from "express";
import ObjectUtil from "../utils/objectUtil";

export default function loginVerify(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['Authorization'];

    console.log("authorization", authorization)

    next();
}