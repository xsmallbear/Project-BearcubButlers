import express, { Router } from "express"
import SupplierController from "../controllers/supplierController";
import validationError from "../middlewares/validationError";
import { body, param } from "express-validator";
import CustomerTypeController from "../controllers/customerTypeController";

const customerType: Router = express.Router();

customerType.get("/", CustomerTypeController.getAll)
customerType.get("/:customerTypeUid", CustomerTypeController.getSingle)
customerType.post("/", CustomerTypeController.create)
customerType.put("/:customerTypeUid", CustomerTypeController.update)
customerType.delete("/:customerTypeUid", CustomerTypeController.delete)

export default customerType 