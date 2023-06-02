import express, {Router} from "express"
import CustomerController from "../controllers/CustomerController";

const customer: Router = express.Router();

customer.get("/", CustomerController.getAll)
customer.get("/:customerTypeUid", CustomerController.getSingle)
customer.post("/", CustomerController.create)
customer.put("/:customerTypeUid", CustomerController.update)
customer.delete("/:customerTypeUid", CustomerController.delete)

export default customer 