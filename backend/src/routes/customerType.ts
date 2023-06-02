import express, {Router} from "express"
import CustomerTypeController from "../controllers/customerTypeController";

const customerType: Router = express.Router();

customerType.get("/", CustomerTypeController.getAll)
customerType.get("/:customerTypeUid", CustomerTypeController.getSingle)
customerType.post("/", CustomerTypeController.create)
customerType.put("/:customerTypeUid", CustomerTypeController.update)
customerType.delete("/:customerTypeUid", CustomerTypeController.delete)

export default customerType 