import { Request, Response } from "express"
import SupplierTypeDao from "../db/supplierTypeDao"
import { json } from "stream/consumers";
import ObjectUtil from "../utils/objectUtil";

export default class SupplierTypeController {
    /**
     * 查询所有的供应商分类
     * @param req 
     * @param res 
     */
    public static async getAll(req: Request, res: Response) {
        const suppliers = await SupplierTypeDao.selectSupplierTypeLimit(10, 0)
        res.json(suppliers)
    }

    /**
     * 根据uid查询供应商分类
     * @param req 
     * @param res 
     */
    public static async getSingleByUid(req: Request, res: Response) {
        const supplierTypeUid = req.params.supplierTypeUid;
        const supplier = await SupplierTypeDao.selectSupplierTypeByUid(supplierTypeUid)
        res.json(supplier)
    }

    /**
     * 根据名字查询供应商分类
     * @param req 
     * @param res 
     */
    public static async getSingleByName(req: Request, res: Response) {
        const supplierName = req.params.supplierName;
        const supplier = await SupplierTypeDao.selectSupplierTypeByName(supplierName)
        res.json(supplier)
    }

    /**
     * 创建新的供应商分类
     * @param req 
     * @param res 
     */
    public static async create(req: Request, res: Response) {
        const name = req.body.name
        const parentUId = req.body.parentUId

        //检测数据库中是否有重复名称的值
        const nameCheck = await SupplierTypeDao.selectSupplierTypeByName(name)
        if (!ObjectUtil.checkObjectIsNull(nameCheck)) {
            res.send({ statu: false, message: "名称重复" })
            return
        }

        //检测这个uid在数据库中是否存在
        const uidCheck = await SupplierTypeDao.selectSupplierTypeByUid(parentUId)
        if (ObjectUtil.checkObjectIsNull(uidCheck)) {
            res.send({ statu: false, message: "此UID的父类不存在" })
            return
        }
    }

    public static async update(req: Request, res: Response) {

    }

    public static async delete(req: Request, res: Response) {

    }

}