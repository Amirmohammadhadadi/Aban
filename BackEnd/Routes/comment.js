import express from 'express'
import { createComment, getAllComments, deleteComment, getOneComment } from '../Controllers/Comment.js'


const CommentRouter = express.Router()


CommentRouter.route('/').get(getAllComments).post(createComment)
CommentRouter.route('/:id').get(getOneComment).delete(deleteComment)


export default CommentRouter