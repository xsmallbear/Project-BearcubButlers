import {Request, Response} from "express"
import SupplierDao from "../db/supplierDao"
import SupplierTypeDao from "../db/supplierTypeDao"
import ObjectUtil from "../utils/objectUtil"
import Supplier from "../models/supplier"
import UUidUtil from "../utils/uuidUtil"

export default class SupplierController {
    /**
     * 查询所有的供应商
     * @param req
     * @param res
     */
    public static async getAll(req: Request, res: Response) {
        const {limit = 10, offset = 0} = req.query;
        const suppliers = await SupplierDao.selectSuppliersLimit(Number(limit), Number(offset))
        res.send({state: false, datas: suppliers})
    }

    /**
     * 根据uid查询供应商
     * @param req
     * @param res
     */
    public static async getSingle(req: Request, res: Response) {
        const supplierUid = req.params.supplierUid
        const supplier = await SupplierDao.selectSupplierByUid(supplierUid);
        res.send({state: false, data: supplier})
    }

    /**
     * 创建一个新的供应商
     * @param req
     * @param res
     */
    public static async create(req: Request, res: Response) {
        const {
            id,
            typeUid,
            name,
            shortName,
            pinyinCode,
            contact,
            phone,
            email,
            address,
            tin,
            remark
        } = req.body

        const idCheck = await SupplierDao.selectSupplierById(id)
        if (!ObjectUtil.checkObjectIsNull(idCheck)) {
            res.send({state: false, message: "id重复"})
            return
        }
        const typeUidCheck = await SupplierTypeDao.selectSupplierTypeByUid(typeUid)
        if (ObjectUtil.checkObjectIsNull(typeUidCheck)) {
            res.send({state: false, message: "供应商分类不存在"})
            return
        }
        const newSupplier: Supplier = new Supplier(
            UUidUtil.generateUUID(),
            id,
            typeUid,
            name,
            shortName,
            pinyinCode,
            contact,
            phone,
            email,
            address,
            tin,
            remark,
            new Date(),
            new Date()
        )
        await SupplierDao.insertSupplier(newSupplier)
        res.send({state: true})
    }

    public static async update(req: Request, res: Response) {
        const {supplierUid} = req.params
        const {
            id,
            typeUid,
            name,
            shortName,
            pinyinCode,
            contact,
            phone,
            email,
            address,
            tin,
            remark
        } = req.body

        const supplierCheck = await SupplierDao.selectSupplierByUid(supplierUid)
        if (ObjectUtil.checkObjectIsNull(supplierCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }
        const supplier = (supplierCheck as Supplier[])[0];
        const idCheck = await SupplierDao.selectSupplierById(id)
        if (!ObjectUtil.checkObjectIsNull(idCheck) && supplier.id !== id) {
            res.send({state: false, message: "id重复"})
            return
        }
        const typeUidCheck = await SupplierTypeDao.selectSupplierTypeByUid(typeUid)
        if (ObjectUtil.checkObjectIsNull(typeUidCheck)) {
            res.send({state: false, message: "供应商分类不存在"})
            return
        }
        supplier.uid = supplierUid
        supplier.id = id
        supplier.typeUid = typeUid
        supplier.name = name
        supplier.shortName = shortName
        supplier.pinyinCode = pinyinCode
        supplier.contact = contact
        supplier.phone = phone
        supplier.email = email
        supplier.address = address
        supplier.tin = tin
        supplier.remark = remark
        await SupplierDao.updateSupplier(supplier)
        res.send({state: true})
    }

    public static async delete(req: Request, res: Response) {
        //TODO:删除功能实现
    }

}