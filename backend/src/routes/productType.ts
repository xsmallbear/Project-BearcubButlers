import express, {Router} from "express"
import ProdectTypeController from "../controllers/prodectTypeController";

const prodectType: Router = express.Router();

prodectType.get("/", ProdectTypeController.getAll)
prodectType.get("/:customerTypeUid", ProdectTypeController.getSingle)
prodectType.post("/", ProdectTypeController.create)
prodectType.put("/:customerTypeUid", ProdectTypeController.update)
prodectType.delete("/:customerTypeUid", ProdectTypeController.delete)

export default prodectType 