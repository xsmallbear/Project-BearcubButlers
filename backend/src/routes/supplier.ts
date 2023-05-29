import express, { Router } from "express"
import SupplierController from "../controllers/supplierController";

const supplier: Router = express.Router();

supplier.get("/", SupplierController.getAll)
supplier.get("/:supplierUid", SupplierController.getSingle)
supplier.post("/", SupplierController.create)
supplier.put("/:supplierUid", SupplierController.update)
supplier.delete("/:supplierUid", SupplierController.delete)

export default supplier 