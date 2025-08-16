import express from 'express'
import { login } from '../Controllers/admin.js'

const adminRouter = express.Router()

adminRouter.route('/').post(login)

export default adminRouter
