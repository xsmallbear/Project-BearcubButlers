import express, { Express, Router } from 'express';

import cors from "cors"
import emojiLogger from './src/middlewares/emojiLogger';
import loginVerify from './src/middlewares/loginVerify';

import brand from './src/routes/brand';
import customer from './src/routes/customer';
import customerType from './src/routes/customerType';
import department from './src/routes/department';
import employee from './src/routes/employee';
import product from './src/routes/product';
import productType from './src/routes/productType';
import role from './src/routes/role';
import storeHouse from './src/routes/storeHouse';
import supplier from './src/routes/supplier';
import supplierType from './src/routes/supplierType';
import verify from './src/routes/verify';
import UUidUtil from './src/utils/uuidUtil';


const app: Express = express();
const port: Number = 8080;

app.use(emojiLogger())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const rootRouter: Router = express.Router()

rootRouter.use(loginVerify(["/verify"]))

rootRouter.use("/brand", brand)
rootRouter.use("/customer", customer)
rootRouter.use("/customerType", customerType)
rootRouter.use("/department", department)
rootRouter.use("/employee", employee)
rootRouter.use("/product", product)
rootRouter.use("/productType", productType)
rootRouter.use("/role", role)
rootRouter.use("/storeHouse", storeHouse)
rootRouter.use("/supplier", supplier)
rootRouter.use("/supplierType", supplierType)
rootRouter.use("/verify", verify)

app.use("/api", rootRouter)

app.all("/uidAndDate", (req, res) => {
    res.send({
        uid: UUidUtil.generateUUID(),
        time: Number(new Date())
    })
})

app.listen(port, () => {
    console.log(`🔥[server]: Server is running at http://localhost:${port}`)
})