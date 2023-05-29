import { Request, Response } from "express"
import SupplierDao from "../db/supplierDao"

export default class SupplierController {
    public static async getAll(req: Request, res: Response) {
        const suppliers = await SupplierDao.selectSupplierLimit(10, 0)
        res.json(suppliers)
    }

    public static async getSingle(req: Request, res: Response) {

    }

    public static async create(req: Request, res: Response) {

    }

    public static async update(req: Request, res: Response) {

    }

    public static async delete(req: Request, res: Response) {

    }

}