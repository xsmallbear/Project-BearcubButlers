import express, {Router} from "express";
import BrandController from "../controllers/brandController";

const brand: Router = express.Router()

brand.get("/", BrandController.getAll)
brand.get("/:customerTypeUid", BrandController.getSingle)
brand.post("/", BrandController.create)
brand.put("/:customerTypeUid", BrandController.update)
brand.delete("/:customerTypeUid", BrandController.delete)

export default brand