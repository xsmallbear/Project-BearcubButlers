import express, { Express, Request, Response, Router } from 'express';
import logger from "morgan"

import verify from './src/routes/verify';
import supplier from './src/routes/supplier';
import emojiLogger from './src/middlewares/emojiLogger';
import suppliertype from './src/routes/supplierType';
import cors from "cors"

const app: Express = express();
const port: Number = 8080;

app.use(emojiLogger())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const rootRouter: Router = express.Router()
rootRouter.use("/verify", verify)
rootRouter.use("/supplier", supplier)
rootRouter.use("/supplierType", suppliertype)

app.use("/api", rootRouter)

app.listen(port, () => {
    console.log(`🔥[server]: Server is running at http://localhost:${port}`)
})