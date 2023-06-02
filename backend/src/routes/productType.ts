import express, {Router} from "express"
import ProductTypeController from "../controllers/prodectTypeController";

const productType: Router = express.Router();

productType.get("/", ProductTypeController.getAll)
productType.get("/:customerTypeUid", ProductTypeController.getSingle)
productType.post("/", ProductTypeController.create)
productType.put("/:customerTypeUid", ProductTypeController.update)
productType.delete("/:customerTypeUid", ProductTypeController.delete)

export default productType