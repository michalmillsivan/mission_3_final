console.log("api is ok");
import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import { teamRouter } from "./teams";
import { meetingRouter } from "./meetings";
dotenv.config()
const app = express()
console.log("Application Start")
app.use(cors())
app.use(bodyParser.json())

app.get("/health-check", (req:any, res:any, next) => {
    return res.json({ message: "Server is up" })
})

app.use("/teams",teamRouter)
app.use("/meetings", meetingRouter)


app.listen(process.env.PORT, () => {
    console.log(`Application Listen to Port: ${process.env.PORT}`)
})