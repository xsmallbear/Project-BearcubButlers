import {Request, Response} from "express"
import SupplierTypeDao from "../db/supplierTypeDao"
import ObjectUtil from "../utils/objectUtil";
import SupplierType from "../models/supplierType";
import UUidUtil from "../utils/uuidUtil";

export default class SupplierTypeController {
    /**
     * 查询所有的供应商分类
     * @param req
     * @param res
     */
    public static async getAll(req: Request, res: Response) {
        const {limit = 10, offset = 0} = req.query;
        const suppliers = await SupplierTypeDao.selectSupplierTypesLimit(Number(limit), Number(offset))
        res.send({state: false, datas: suppliers})
    }

    /**
     * 根据uid查询供应商分类
     * @param req
     * @param res
     */
    public static async getSingleByUid(req: Request, res: Response) {
        const supplierTypeUid = req.params.supplierTypeUid;
        const supplier = await SupplierTypeDao.selectSupplierTypeByUid(supplierTypeUid)
        res.send({state: true, data: supplier})
    }

    /**
     * 根据名字查询供应商分类
     * @param req
     * @param res
     */
    public static async getSingleByName(req: Request, res: Response) {
        const supplierName = req.params.supplierName;
        const supplier = await SupplierTypeDao.selectSupplierTypeByName(supplierName)
        res.send({state: true, data: supplier})
    }

    /**
     * 创建新的供应商分类
     * @param req
     * @param res
     */
    public static async create(req: Request, res: Response) {
        const name = req.body.name
        const parentUid = req.body.parentUid

        //检测这个父类uid在数据库中是否存在
        const parentUidCheck = await SupplierTypeDao.selectSupplierTypeByUid(parentUid)
        if (ObjectUtil.checkObjectIsNull(parentUidCheck)) {
            res.send({state: false, message: "此UID的父类不存在"})
            return
        }
        //检测在当前父类下是否有同名的存在
        const subTypes = await SupplierTypeDao.selectSupplierTypesByParentUid(parentUid)
        for (let i = 0; i < subTypes.length; i++) {
            if (subTypes[i].name === name) {
                res.send({state: false, message: "名称重复"})
                return
            }
        }

        //添加新的类
        const newSupplierType: SupplierType = new SupplierType(
            UUidUtil.generateUUID(),
            name,
            parentUid,
            new Date(),
            new Date()
        )
        await SupplierTypeDao.insertSupplierType(newSupplierType)
        res.send({state: true})

    }

    /**
     * 修改供应商分类
     * @param req
     * @param res
     */
    public static async update(req: Request, res: Response) {
        const supplierTypeUid = req.params.supplierTypeUid
        const name = req.body.name
        const parentUId = req.body.parentUId

        const dataCheck = await SupplierTypeDao.selectSupplierTypeByUid(supplierTypeUid)
        if (ObjectUtil.checkObjectIsNull(dataCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }

        //检测这个uid在数据库中是否存在
        const uidCheck = await SupplierTypeDao.selectSupplierTypeByUid(parentUId)
        if (ObjectUtil.checkObjectIsNull(uidCheck)) {
            res.send({state: false, message: "此UID的父类不存在"})
            return
        }

        //TODO: 需要处理同名的问题
        //检测在当前父类下是否有同名的存在
        const subTypes = (await SupplierTypeDao.selectSupplierTypesByParentUid(parentUId))
        for (let i = 0; i < subTypes.length; i++) {
            if (subTypes[i].name === name) {
                res.send({state: false, message: "名称重复"})
                return
            }
        }

        const supplierType = (dataCheck as SupplierType[])[0];
        supplierType.name = name;
        supplierType.parentUid = parentUId
        supplierType.updateTime = new Date()

        await SupplierTypeDao.updateSupplierType(supplierType)
        res.send({state: true})
    }

    /**
     * 删除一个供应商类型
     * @param req
     * @param res
     */
    public static async delete(req: Request, res: Response) {
        //TODO:删除功能实现
    }

}