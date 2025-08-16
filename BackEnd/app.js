import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import adminRouter from './Routes/admin.js'
import CommentRouter from './Routes/comment.js'


const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin: "*" }))


app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/comment', CommentRouter)







export default app