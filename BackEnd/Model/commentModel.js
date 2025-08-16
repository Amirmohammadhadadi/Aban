import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'writer is required']

    },
    status: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


const Comment = mongoose.model("Comment", commentSchema)

export default Comment