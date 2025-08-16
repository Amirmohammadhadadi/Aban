import mongoose from "mongoose";

const timeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'fullName is required']
    },
    phoneNumber: {
        type: String,
        required: [true, 'phoneNumber is required']
    },
    servic: {
        type: String,
        enum: ['talk', 'kar', 'goftar'],
        default: 'talk'
    },
    description: {
        type: String,

    }


}, { timestamps: true })

const Time = mongoose.model("Time", timeSchema)

export default Time