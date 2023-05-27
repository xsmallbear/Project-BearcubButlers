import express, { Router, Request, Response } from "express"
import knex from "../db/knex"

const systemUser: Router = express.Router()

systemUser.post("/login", (req: Request, res: Response) => {
    const userName = req.body.userName
    const password = req.body.password

    knex
        .select("*")
        .from("systemUser")
        .then((rows) => {
            console.log(rows)
        })
        .catch((err) => {
            console.log(err)
        })

    res.send("{status:ok}")
})

export default systemUser