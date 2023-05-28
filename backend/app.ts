import express, { Express, Request, Response } from 'express';
import logger from "morgan"

import verify from './src/routes/verify';
import emojiLogger from './src/middlewares/emojiLogger';

const app: Express = express();
const port: Number = 8080;

app.use(emojiLogger())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/verify", verify)

app.listen(port, () => {
    console.log(`🔥[server]: Server is running at http://localhost:${port}`)
})