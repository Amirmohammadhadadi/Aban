import { login } from '../Controllers/authCn.js'
import express from 'express'


const authRouter = express.Router()
authRouter.route("/").post(login)

export default authRouter 
