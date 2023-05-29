import express, { Express, Request, Response, Router } from 'express';
import logger from "morgan"

import cors from "cors"
import emojiLogger from './src/middlewares/emojiLogger';
import loginVerify from './src/middlewares/loginVerify';

import prodectType from './src/routes/productType';
import customer from './src/routes/customer';
import customerType from './src/routes/customerType';
import department from './src/routes/department';
import employee from './src/routes/employee';
import product from './src/routes/product';
import productType from './src/routes/productType';
import storeHouse from './src/routes/storeHouse';
import supplier from './src/routes/supplier';
import suppliertype from './src/routes/supplierType';
import verify from './src/routes/verify';


const app: Express = express();
const port: Number = 8080;

app.use(emojiLogger())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const rootRouter: Router = express.Router()

rootRouter.use(loginVerify(["/verify"]))

rootRouter.use("/brand", prodectType)
rootRouter.use("/customer", customer)
rootRouter.use("/customerType", customerType)
rootRouter.use("/department", department)
rootRouter.use("/employee", employee)
rootRouter.use("/product", product)
rootRouter.use("/productType", productType)
rootRouter.use("/storeHouse", storeHouse)
rootRouter.use("/supplier", supplier)
rootRouter.use("/supplierType", suppliertype)
rootRouter.use("/verify", verify)

app.use("/api", rootRouter)

app.listen(port, () => {
    console.log(`🔥[server]: Server is running at http://localhost:${port}`)
})