import {Request, Response} from "express";
import CustomerDao from "../db/customerDao";
import ObjectUtil from "../utils/objectUtil";
import CustomerTypeDao from "../db/customerTypeDao";
import Customer from "../models/customer";
import UUidUtil from "../utils/uuidUtil";

export default class CustomerController {
    /**
     * 获取所有的客户信息
     * @param req
     * @param res
     */
    static async getAll(req: Request, res: Response) {
        const {limit, offset} = req.query

        const customers = await CustomerDao.selectCustomersLimit(Number(limit), Number(offset))
        res.send({state: true, datas: customers})
    }

    /**
     * 根据客户Uid获取客户信息
     * @param req
     * @param res
     */
    static async getSingle(req: Request, res: Response) {
        const {customerUid} = req.params

        const customer = await CustomerDao.selectCustomerByUId(customerUid)
        res.send({state: true, data: customer})
    }

    /**
     * 添加一个新的客户信息
     * @param req
     * @param res
     */
    static async create(req: Request, res: Response) {
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

        const idCheck = await CustomerDao.selectCustomerById(id)
        if (!ObjectUtil.checkObjectIsNull(idCheck)) {
            res.send({state: false, message: "id重复"})
            return
        }
        const typeUidCheck = await CustomerTypeDao.selectCustomerTypeByUid(typeUid)
        if (ObjectUtil.checkObjectIsNull(typeUidCheck)) {
            res.send({state: false, message: "客户分类不存在"})
            return
        }

        const newCustomer: Customer = new Customer(
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
        await CustomerDao.insertCustomer(newCustomer)
        res.send({state: true})
    }

    /**
     * 修改一个客户信息
     * @param req
     * @param res
     */
    static async update(req: Request, res: Response) {
        const {customerUid} = req.params
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

        const dataCheck = await CustomerDao.selectCustomerByUId(customerUid)
        if (ObjectUtil.checkObjectIsNull(dataCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }
        const customer = dataCheck[0]
        const idCheck = await CustomerDao.selectCustomerById(id)
        if (!ObjectUtil.checkObjectIsNull(idCheck) && customer.id !== id) {
            res.send({state: false, message: "id重复"})
            return
        }
        const typeUidCheck = await CustomerTypeDao.selectCustomerTypeByParentUid(typeUid)
        if (ObjectUtil.checkObjectIsNull(typeUidCheck)) {
            res.send({state: false, message: "客户分类不存在"})
            return
        }
        customer.uid = customerUid
        customer.id = id
        customer.typeUid = typeUid
        customer.name = name
        customer.shortName = shortName
        customer.pinyinCode = pinyinCode
        customer.contact = contact
        customer.phone = phone
        customer.email = email
        customer.address = address
        customer.tin = tin
        customer.remark = remark
        customer.updateTime = new Date()

        await CustomerDao.updateCustomer(customer)
        res.send({state: true})
    }

    /**
     * 删除一个客户信息
     * @param req
     * @param res
     */
    static async delete(req: Request, res: Response) {
        const {customerUid} = req.params

        const dataCheck = await CustomerDao.selectCustomerByUId(customerUid)
        if (ObjectUtil.checkObjectIsNull(dataCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }

        //检查是否被外键使用
    }
}